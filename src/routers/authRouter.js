import { Router } from "express";
import { validateLoginSchema } from "../middlewares/validateLoginSchema.js";
import { login, logout } from "../controllers/authController.js";
import { validateToken } from "../middlewares/validateToken.js";

const authRouter = Router();
authRouter.post('/login', validateLoginSchema, login);
authRouter.delete('/logout', validateToken, logout);

export default authRouter;