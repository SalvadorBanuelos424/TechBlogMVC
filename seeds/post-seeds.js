const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    description: 'lorem ipsum dolor sit amet, consectetur',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    description: 'lorem ipsum dolor sit amet, consectetur',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    description: 'lorem ipsum dolor sit amet, consectetur',
    user_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
