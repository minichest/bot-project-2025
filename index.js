require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { getPlayer, createPlayer } = require('./music/player');
const ytdl = require('@distube/ytdl-core');

const ytSearch = require('yt-search');
const { Client, Collection, Events, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');
const { connectDB, getUser, addItemToInventory } = require('./mongo');
const storeItems = require('./store')
require('dotenv').config();
const dbEmitter = require('./dbEmitter');

const { startCoinDrops } = require('./utils/coinDrops');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers
  ]
});

// Mini Functions

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

async function searchYouTube(query) {
  const results = await ytSearch(query);
  if (!results || !results.videos.length) return null;
  const video = results.videos[0];
  return {
    title: video.title,
    url: video.url,
    duration: video.seconds,
    thumbnail: video.thumbnail
  };
}

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

// Commands

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Load commands dynamically from files
for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
  client.commands.set(command.data.name, command);
}

client.regCommands = new Collection();

const regCommandsPath = path.join(__dirname, 'regular_commands');
const regCommandFiles = fs.readdirSync(regCommandsPath).filter(regFile => regFile.endsWith('.js'));

for (const regFile of regCommandFiles) {
  const regCommand = require(path.join(regCommandsPath, regFile));

  client.regCommands.set(regCommand.name, regCommand);

  if (regCommand.aliases && Array.isArray(regCommand.aliases)) {
    regCommand.aliases.forEach(alias => {
      client.regCommands.set(alias, regCommand);
    });
  }
}

client.on('error', console.error);
process.on('unhandledRejection', err => {
  console.error('Unhandled Rejection:', err);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: '❌ There was an error executing this command.', ephemeral: true });
  }
});

const prefix = '404';

client.on('messageCreate', async message => {
  if (message.author.bot) return;

  const bannedWords = ['israel', 'niggger', 'nigger', 'niggers', 'nigggger', 'jew', 'jews'];
  const roleId = '1364392249634328658';
  const lowerContent = message.content.toLowerCase();

  if (!message.content.startsWith(prefix)) return;

  // Check banned words before commands
  const containsBanned = bannedWords.some(word => lowerContent.includes(word));
  if (containsBanned) {
    try {
      const role = await message.guild.roles.fetch(roleId);
      if (!message.member.roles.cache.has(role.id)) {
        await message.channel.send(`${message.author.username} sent a message that contains a banned word.`);
        await message.delete();
        return;
      } else {
        console.log(`User has the role: ${role.name}`);
      }
    } catch (error) {
      console.error('Error fetching role:', error);
      await message.channel.send('There was an error fetching the role.');
      return;
    }
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  const command = client.regCommands.get(commandName);

  if (!command) return;

  try {
    await command.execute(message, args);
  } catch (err) {
    console.error(`❌ Error in command '${commandName}':`, err);
    await message.reply('There was an error trying to execute that command.');
  }
});

client.login(process.env.DISCORD_TOKEN);

client.once('ready', async () => {
  console.log(`${client.user.tag} is ready!`);
  try {
    await connectDB();
    console.log('Database connected.');
    dbEmitter.emit('connected');

    startCoinDrops(client);

    console.log('Coin drops initialized.');
  } catch (err) {
    console.error('Failed to connect to DB or initialize coin drops:', err);
  }
});


module.exports = { dbEmitter };