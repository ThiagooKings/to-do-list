import { Router } from "express";
import { CreateUserController } from "../modules/users/repositories/useCase/createUser/CreateUserController";
import { AuthenticateUserController } from "../modules/users/repositories/useCase/authenticateUser/AuthenticateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

userRoutes.post("/create", createUserController.handle);
userRoutes.post("/login", authenticateUserController.handle);

export { userRoutes }
