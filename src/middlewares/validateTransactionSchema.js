import joi from 'joi';

const transactionSchema = joi.object({
    amount: joi.number().required(),
    description: joi.string().required()
});

export function validateTransactionSchema(req,res,next){
    const transaction = req.body;
    const validation = transactionSchema.validate(transaction);
    if(validation.error){
        return res.sendStatus(422);
    }
    next();
}