
import { Router } from "express";
import { signUp } from "../controllers/userController.js";
import { validateUserSchema } from "../middlewares/validateUserSchema.js";

const userRouter = Router();
userRouter.post('/sign-up', validateUserSchema, signUp);

export default userRouter;