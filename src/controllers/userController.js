import bcrypt from 'bcrypt';
import db from '../db.js';

export async function signUp(req,res){
    const user = req.body;
    try {
        const passwordHash = bcrypt.hashSync(user.password, 10);
        await db.collection('users').insertOne({... user, password: passwordHash, entries: []});
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus('500');
    }
}