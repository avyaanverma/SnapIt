import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import {config} from "dotenv";

config();
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});