
class AppError extends Error {
    constructor(statusCode, message){
        super(message);
        this.isOperational = true;
        this.statusCode = statusCode;
        this.status = `${this.statusCode}`.startsWith('4')?'fail':"error";
        Error.captureStackTrace(this,this.constructor)
    }
}
module.exports = AppError;