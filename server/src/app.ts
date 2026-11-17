import express from "express";
import cors from "cors";
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// MIDDELWARE
// ROUTES
import routes from "./routes/index.js"
app.use(routes)


export default app
