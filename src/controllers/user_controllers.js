import { userModel } from "../database/user_model.js";
import bcrypt from 'bcrypt';
import { validateUser } from "../validations/user_validate.js";
import { ConflictError, ValidationError } from "../utils/errors.js";


export const registerUser = async(req, res) => {
    const { email, password, confirmPassword } = req.body;

    const { data, error } = validateUser({ email, password, confirmPassword });
    if(error)throw error;

    const userAlreadyExists = await userModel.findOne({ where: { email }});
    if(userAlreadyExists)throw new ConflictError('User already exists.');
    
    if(password !== confirmPassword)throw new ValidationError("Passwords doesn't match");

    const hashedPass = await bcrypt.hash(password, 8);
    const newUser = await userModel.create({ email, password: hashedPass });

    return res.status(201).json({
        newUser: newUser.email,
        newUsedId: newUser.id,
        message: 'User created succesfully'
    });
}
