const connection = require("./connection");
const {readFileSync} = require('fs');
const dbBuild = () => {
    const sql = readFileSync('C:/Users/SALOOH/Desktop/pg-workshop/server/database/config/build.sql').toString();
    return connection.query(sql);
};

module.exports = dbBuild;