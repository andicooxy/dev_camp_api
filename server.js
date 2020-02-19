const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: './config/config.env' });

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, console.log(`App runing port ${port} in ${process.env.NODE_ENV} mode`));