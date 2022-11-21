import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { validateTransactionSchema } from "../middlewares/validateTransactionSchema.js";
import { createEntry, createExit, listEntries } from "../controllers/transactionController.js";

const transactionRouter = Router();
transactionRouter.post('/new-entry', validateToken, validateTransactionSchema, createEntry);
transactionRouter.post('/new-exit', validateToken, validateTransactionSchema, createExit);
transactionRouter.get('/entries', validateToken, listEntries);

export default transactionRouter;