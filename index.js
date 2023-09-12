const express = require("express");
const App = express();

const app = require("app");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const port = 5500;

App.listen(process.env.RUINNING_PORT, () => {
    console.log("Server is running on port " + process.env.RUINNING_PORT);
})