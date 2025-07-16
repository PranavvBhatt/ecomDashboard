require('dotenv').config();
const express = require("express")
const cors = require("cors")
const app = express();
 
const CustomerModel = require('./models/CustomerModel');


const PORT = process.env.PORT || 5001;
require('./models/db')
app.use(express.json())
app.use(cors())



app.post("/register", async (req, resp) => {
  try {

    const user = new CustomerModel(req.body);
    
    const result = await user.save();
    resp.status(201).send(result);
  } catch (err) {
    resp.status(400).send({ error: "Failed to register user", details: err.message });
  }
});









app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});