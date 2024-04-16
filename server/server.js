require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/auth-route");
const connectDb = require("./utils/db");

/*This line of code adds Express middleware that parses incoming request bodies with JSON payloads.
It's important to place this before any routes that need to handle JSON data in the request body. 
This middleware is responsible for parsing JSON data from requests, 
and it should be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.*/

app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);

const PORT = 3000;
connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT}`);
    });
  });