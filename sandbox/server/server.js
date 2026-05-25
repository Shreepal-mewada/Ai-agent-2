import "dotenv/config";
import app from './src/app.js';
import connectDB from "./src/config/db.js";
// import dotenv from 'dotenv';    


// dotenv.config();
connectDB();

app.listen(3000, () => {
    console.log(`Sandbox API server is running on port 3000`);
});