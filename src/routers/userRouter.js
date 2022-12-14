import { Router } from "express";
import { validateUserSchema } from "../middlewares/validateUserSchema.js";
import { signUp } from "../controllers/userController.js";

const userRouter = Router();
userRouter.post('/sign-up', validateUserSchema, signUp);

export default userRouter;