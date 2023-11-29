const express = require("express");
const app = express();

// Custom middleware function to log timestamp and requested URL
const requestLoggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const url = req.originalUrl;

  // Log the timestamp and requested URL
  console.log(`[${timestamp}] ${url}`);

  // Call the next middleware in the chain
  next();
};

// Use the middleware for all incoming requests
app.use(requestLoggerMiddleware);

// Your routes and other middleware go here...

// Example route
app.get("/", (req, res) => {
  res.send("Hello, World! Enter Path");
});

// Start the server

app.listen(3000, () => {
  console.log("Server is listening on port ${3000} http://localhost:3000/");
});
