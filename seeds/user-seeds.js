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
    email: 'test3@test.com',
    password: 'test3'
  },
  {
    username: 'Memebot',
    email: 'test4@test.com',
    password: 'test4'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
