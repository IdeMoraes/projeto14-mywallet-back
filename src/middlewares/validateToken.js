import db from "../db.js";

export async function validateToken(req,res,next){
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ", "");
    if(!token){
        return res.sendStatus(401);
    }
    const session = await db.collection("sessions").findOne({token});
    if(!session){
        return res.sendStatus(401);
    }
    const user = await db.collection ('users').findOne({_id: session.userId});
    res.locals.user = user;
    next();
}