import joi from 'joi';

const entrySchema = joi.object({
    amount: joi.number().required(),
    description: joi.string().required()
});

export function validateEntrySchema(req,res,next){
    const entry = req.body;
    const validation = entrySchema.validate(entry);
    if(validation.error){
        return res.sendStatus(422);
    }
    next();
}