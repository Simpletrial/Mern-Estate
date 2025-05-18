export const errorHandler = (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode;  // 👈 important!
    return error;
};
