import z  from 'zod';

const userSchema = z.object({
    email: 
    z.string({ required_error: "Email is required", invalid_type_error: "Must be an string"})
    .email("Invalid email format"),

    password: 
    z.string({ required_error: "Password is required", invalid_type_error: "Password must be an string",}),

    confirmPassword: 
    z.string({ required_error: "Comfirm password is required", invalid_type_error: "Confirm password must be an string",})
})

export const validateUser = (user) => userSchema.safeParse(user);