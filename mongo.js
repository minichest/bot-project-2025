const mongoose = require('mongoose');
require('dotenv').config();

let User = require('./models/user');
const dbEmitter = require('./dbEmitter');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'travis_cashout',
    });
    console.log('✅ Connected to MongoDB (travis_cashout)');
    dbEmitter.emit('connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
  }
};

async function getUser(userId) {
  let user = await User.findOne({ userId });
  if (!user) {
    user = new User({ userId, laFlareCoins: 0, inventory: [] });
    await user.save();
  }
  return user;
}

async function addItemToInventory(user, itemId, quantity = 1) {
  const itemIndex = user.inventory.findIndex(i => i.itemId === itemId);
  if (itemIndex === -1) {
    user.inventory.push({ itemId, quantity });
  } else {
    user.inventory[itemIndex].quantity += quantity;
  }
  await user.save();
}

async function getCoins(userId) {
  const user = await getUser(userId);
  return user.laFlareCoins;
}

async function setCoins(userId, amount) {
  const user = await getUser(userId);
  user.laFlareCoins = amount;
  await user.save();
  return user.laFlareCoins;
}

async function addCoins(userId, amount) {
  const user = await getUser(userId);
  user.laFlareCoins += amount;
  await user.save();
  return user.laFlareCoins;
}

async function updateExistingUsers() {
  await User.updateMany(
    { laFlameCoins: { $exists: false } },
    { $set: { laFlameCoins: 0 } }
  );
  await User.updateMany(
    { bank: { $exists: false } },
    { $set: { bank: 0 } }
  );
  await User.updateMany(
    { lastDaily: { $exists: false } },
    { $set: { lastDaily: null } }
  );
  await User.updateMany(
    { lastMonthly: { $exists: false } },
    { $set: { lastMonthly: null } }
  );
  await User.updateMany(
    { lastWork: { $exists: false } },
    { $set: { lastWork: null } }
  );
  await User.updateMany(
    { inventory: { $exists: false } },
    { $set: { inventory: [] } }
  );
  await User.updateMany(
    { jobTime: { $exists: false } },
    { $set: { jobTime: 0 } }
  );
  await User.updateMany(
    { currentJob: { $exists: false } },
    { $set: { currentJob: null } }
  );
  await User.updateMany(
  {
    $or: [
      { blackjackWins: { $exists: false } },
      { gamblingWins: { $exists: false } },
      { gamblingEarnings: { $exists: false } },
      { gamblingLosses: { $exists: false } },
      { blackjackEarnings: { $exists: false } },
      { blackjackLosses: { $exists: false } },
    ],
  },
  {
    $set: {
      blackjackWins: 0,
      gamblingWins: 0,
      gamblingEarnings: 0,
      gamblingLosses: 0,
      blackjackEarnings: 0,
      blackjackLosses: 0,
    }
  });
  await User.updateMany(
    { lastRobTime: { $exists: false } },
    { $set: { lastRobTime: null } }
  );

  await User.updateMany(
    { lastRobbedTime: { $exists: false } },
    { $set: { lastRobbedTime: null } }
  );
  await User.updateMany(
    { lastBankRob: { $exists: false } },
    { $set: { lastBankrob: null } }
  );

  await User.updateMany(
    { lastBankRobbedTime: { $exists: false } },
    { $set: { lastBankRobbedTime: null } }
  );

  await User.updateMany(
    { protectUntil: { $exists: false } },
    { $set: { protectUntil: null } }
  );

  console.log('All users updated with new fields!');
}

// Wait for Mongo connection before running updates
if (mongoose.connection.readyState === 1) {
  updateExistingUsers().catch(console.error);
} else {
  dbEmitter.once('connected', () => {
    updateExistingUsers().catch(console.error);
})}

module.exports = {addItemToInventory, connectDB, getUser, getCoins, setCoins, addCoins };