const ErrorHandler =  require('../utils/errorHandler');

module.exports =  (err, req, res, next) => {    
    err.statusCode = err.status || 500;
    let error = {...err}    
    error.message = err.message;    
    res.status(err.statusCode).json({
        success: false,
        error,
        message: error.message,
        stack: error.stack
    })
}