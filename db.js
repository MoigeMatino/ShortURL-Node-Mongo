const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const url = 'mongodb://${PROCESS.ENV.MONGODB_USER}:${PROCESS.ENV.MONGODB_PWD}@${PROCESS.ENV.MONGODB_HOST}:${PROCESS.ENV.MONGODB_PORT}/${PROCESS.ENV.MONGODB_DB}';

mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', _ => {
    console.log('Database connected:', url)
  })
  
  db.on('error', err => {
    console.error('connection error:', err)
  });










