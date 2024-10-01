export class AppError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.name = this.constructor.name
        this.statusCode = statusCode
    }
}

export class ConflictError extends AppError {
    name = 'Conflict Error'

    constructor(message) {
        super(message, 409)
    }
}

export class ValidationError extends AppError {
    name= 'Validation Error'

    constructor(message) {
        super(message, 400)
    }
}