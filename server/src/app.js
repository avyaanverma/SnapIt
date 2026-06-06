import express from "express";

app.use(express.json());
app.use(cookieParser());

const app = express();

export default app;