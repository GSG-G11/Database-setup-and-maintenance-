const express = require("express");
const { join } = require("path");
const router = require("./controllers");
const dbBuild = require("./database/config/build");

const app = express();

app.use(()=>{dbBuild().then((data)=>data)});
   
app.use(express.static(join(__dirname, "..", "public")));
app.set("port", process.env.PORT || 5555);

app.use(router);

module.exports = app;
