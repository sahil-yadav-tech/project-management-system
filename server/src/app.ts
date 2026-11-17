import express from "express";
import cors from "cors";
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get("/health", (_req, res) => {
 return  res.status(200).json({
    success: true,
    message: "Server is running successfully",
  });
});

export default app
