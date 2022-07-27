const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Bitdallah',
    email: 'test0@test.com',
    password: 'test0'
  },
  {
    username: 'IheartTEK',
    email: 'test1@test.com',
    password: 'test1'
  },
  {
    username: 'LAKERZphan',
    email: 'test2@test.com',
    password: 'test2'
  },
  {
    username: 'Memebot',
    email: 'test3@test.com',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
