const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const { body, validationResult } = require("express-validator");


// Import routers
const indexRouter = require('./routes/indexRouter');
const formRouter = require('./routes/formRouter');

// Use routers
app.use("/new", formRouter);
app.use("/", indexRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
