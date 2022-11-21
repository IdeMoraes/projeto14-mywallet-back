import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { validateTransactionSchema } from "../middlewares/validateTransactionSchema.js";
import { creatEntry, creatExit } from "../controllers/transactionController.js";

const transactionRouter = Router();
transactionRouter.post('/new-entry', validateToken, validateTransactionSchema, creatEntry);
transactionRouter.post('/new-exit', validateToken, validateTransactionSchema, creatExit);

export default transactionRouter;