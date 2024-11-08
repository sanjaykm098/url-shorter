import express from "express";
import { router } from "./routes/url.js";
import { connect } from "./connect.js";
const app = express();

app.use(express.json());

connect("mongodb://127.0.0.1:27017/url-shortener");

app.use("/url", router);

app.listen(3000, function () {
  console.log("Server is Running");
});
