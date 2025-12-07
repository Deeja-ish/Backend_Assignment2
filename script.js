const mongoose = require("mongoose");
const dotenv = require("dotenv")
const express = require("express")
const morgan = require("morgan");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const app = express()
const port = 3000 || process.env.PORT

dotenv.config()

app.use(express.json());
app.use(morgan('dev'))

app.use("/api/users", userRoutes);

connectDB()


app.listen(port , () => {
    console.log(`Server is listerning at port ${port}`)
})