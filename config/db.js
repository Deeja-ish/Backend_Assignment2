const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connectDB () {
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URL);
        console.log(`MongoDB connected successfully!`)
    } catch (error) {
        console.log(`Error connecting to DB`, error)
        process.exit(1);
    }
}

module.exports = connectDB