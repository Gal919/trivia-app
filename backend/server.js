const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("dotenv");
const router = require("./router/route");
const connect = require("./database/connection");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

const port = process.env.PORT || 8080;

app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("get request");
  } catch (error) {
    res.json(error);
  }
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`server connected to ${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid DB Connection");
  });
