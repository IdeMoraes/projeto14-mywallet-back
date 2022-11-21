import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { validateEntrySchema } from "../middlewares/validateEntrySchema.js";
import { creatEntry } from "../controllers/transactionController.js";

const transactionRouter = Router();
transactionRouter.post('/new-entry', validateToken, validateEntrySchema, creatEntry);

export default transactionRouter;