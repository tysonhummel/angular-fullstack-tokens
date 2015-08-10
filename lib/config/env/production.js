'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         // 'mongodb://localhost/fullstack'
         'mongodb://tyson:zxcvasdf@ds031203.mongolab.com:31203/heroku_rgm9bxh1'
  }
};