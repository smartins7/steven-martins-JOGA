const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Importing controllers would go below

// Const App to use express method
const app = express();

app.use(express.json());
app.use(cors());

// Local Host
app.listen(5000, console.log("app is listening at: http://localhost:5000"));
