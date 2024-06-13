import { Router } from "express";
import { CreateBoardController } from "../modules/boards/repositories/useCase/CreateBoardController";


const boardRoutes = Router();

const createBoardController = new CreateBoardController()

boardRoutes.post("/", createBoardController.handle);

export { boardRoutes }
