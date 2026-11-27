import express from "express";
import cors from "cors";
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// ROUTES
import routes from "./routes/index.js"
import errorMiddleware from "./middlewares/error.middleware.js";
app.use(routes)

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running"
    });
});

// Handle unknown routes
// app.use((req, res, next) => {
//     next(new AppError(
//         `Route not found: ${req.method} ${req.originalUrl}`,
//         404
//     ));
// });

// MIDDELWARE
// Centralized MIDDELWARE error handler 
app.use(errorMiddleware);

export default app
