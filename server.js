const express = require("express");
const dotenv = require("dotenv");

// set route files 
const bootcamp_v1 = require('./routers/bootcamps');

dotenv.config({ path: './config/config.env' });

const app = express();
const port = process.env.PORT || 4000;

// mount routers 
app.use('/api/v1/bootcamps', bootcamp_v1);

// set listen to port
app.listen(port, console.log(`App runing port ${port} in ${process.env.NODE_ENV} mode`));