//here we are using node.js to create server
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const user = {
  email: "sahiba@gmail.com",
  password: "123456",
};

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  //or
  //const email = req.body.email;
  //const password = req.body.password;

  // Check email and password
  if (email === user.email && password === user.password) {
    res.status(200).json({
      message: "Login successful",
    });
    
  } else {
    res.status(401).json({
      message: "Invalid email or password",
    });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server  is running on port 3000");
});
