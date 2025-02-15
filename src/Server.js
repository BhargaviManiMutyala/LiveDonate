const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const transactionsRoute = require("./routes/transactions");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/donations", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/transactions", transactionsRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
