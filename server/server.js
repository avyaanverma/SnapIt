import "dotenv/config"; // ✅ Loads env variables before any other module loads
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});