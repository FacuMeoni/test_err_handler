import { AppError } from "../utils/errors.js";

const errorHandler = (err, req, res, next) => {
    
    if(err.name === 'ZodError') {
        return res.status(400).json({ 
            type: 'Validation Error',
            message: err.issues.map(issue => issue.message)
        });
    }

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            type: err.name,
            message: err.message
        });
    }

    return res.status(500).json({message: 'Something go wrong, try later.'});
}

export default errorHandler;