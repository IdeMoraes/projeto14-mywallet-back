import { Router } from "express";
import { validateLoginSchema } from "../middlewares/validateLoginSchema.js";
import { login } from "../controllers/authController.js";

const authRouter = Router();
authRouter.post('/login', validateLoginSchema, login);

export default authRouter;