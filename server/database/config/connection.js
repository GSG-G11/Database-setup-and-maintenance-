
require('env2')('config.env');
const {Pool} = require('pg');

if(! process.env.DB_URL){
  throw new Error (' DATABASE URL have a problems');
}

const options = {
  connectionString : process.env.DB_URL,
  ssl: false
};

const connection = new Pool(options);

module.exports = connection;