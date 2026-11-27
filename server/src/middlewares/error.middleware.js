
const errorMiddleware = (err, req, res, next) => {

    const statusCode = err.statusCode || 500;

    const response = {
        success: false,
        message: err.isOperational
            ? err.message
            : "Internal Server Error"
    };

    // Include additional details for operational errors
    if (err.isOperational && err.details) {
        response.errors = err.details;
    }

    // Log unexpected errors for debugging
    if (!err.isOperational) {
        console.error("UNEXPECTED ERROR:", err);
    }

    return res.status(statusCode).json(response);
};

export default errorMiddleware;