// dbEmitter.js
const EventEmitter = require('events');

class DBEmitter extends EventEmitter {}
const dbEmitter = new DBEmitter();

module.exports = dbEmitter;