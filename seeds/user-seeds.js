const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Bitdallah',
    password: 'test0'
  },
  {
    username: 'IheartTEK',
    password: 'test1'
  },
  {
    username: 'LAKERZphan',
    password: 'test2'
  },
  {
    username: 'Memebot',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
