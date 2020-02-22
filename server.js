const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

// set route files
const bootcamp_v1 = require("./routers/bootcamps");

dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();

// Json parsers
app.use(express.json());

// Dev logger
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
// mount routers
app.use("/api/v1/bootcamps", bootcamp_v1);

// set listen to port
const port = process.env.PORT || 4000;
const server = app.listen(
    port,
    console.log(
        `App runing port ${port} in ${process.env.NODE_ENV} mode`.green.bold
    )
);

// Handdle unhandled promies rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
});