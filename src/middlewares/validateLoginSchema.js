import joi from 'joi';

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export function validateLoginSchema(req,res,next){
    const login = req.body;
    const validation = loginSchema.validate(login);
    if(validation.error){
        return res.sendStatus(422);
    }
    next();
}