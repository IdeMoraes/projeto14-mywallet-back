import dayjs from 'dayjs';
import db from '../db.js';

export async function creatEntry(req,res){
    const entry = req.body;
    const {user} = res.locals;
    try {
        const newEntry = {...entry, type: 'entry', createdAt: dayjs().format("DD/MM")}
        await db.collection('users').updateOne({_id: user._id}, {$push: {entries: newEntry}});
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus('500');
    }
}
export async function creatExit(req,res){
    const entry = req.body;
    const {user} = res.locals;
    try {
        const newEntry = {...entry, type: 'exit', createdAt: dayjs().format("DD/MM")}
        await db.collection('users').updateOne({_id: user._id}, {$push: {entries: newEntry}});
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus('500');
    }
}
export async function listEntries(req,res){
    const {user} = res.locals;
    try {
        res.send(user.entries);
      } catch (error) {
        console.error({ error });
      }
}