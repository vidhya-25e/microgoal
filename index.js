
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const goalRoutes = require("./routes/goalRoutes");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(()=> console.log("DB Error"));

app.use("/api/auth",authRoutes);
app.use("/api/goals",goalRoutes);

app.get("/",(req,res)=>{
    res.send("MicroGoals API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server running on port",PORT);
});
