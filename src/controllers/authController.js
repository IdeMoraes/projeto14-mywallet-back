import db from '../db.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function login(req,res){
    const {email, password} = req.body;
    const user = await db.collection('users').findOne({email})
    if(!user){
        return res.sendStatus(401);
    }
    if(bcrypt.compareSync(password, user.password)){
        const token = uuid();
        await db.collection('sessions').insertOne({token, userId: user._id});
        return res.send({name: user.name, token: token});
    }
    res.sendStatus(401);
}

export async function logout(req,res){
    const {user} = res.locals;
    try {
        await db.collection("sessions").deleteOne({ userId: user._id });
        res.status(200).send({ message: "Sessão finalizada com sucesso!" });
      } catch (error) {
        console.error({ error });
      }
}