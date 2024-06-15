import { Router } from "express";
import { CreateBoardController } from "../modules/boards/repositories/useCase/createBoard/CreateBoardController";
import { FindBoardByUserController } from "../modules/boards/repositories/useCase/findBoardByUser/FindBoardByUserController";

const boardRoutes = Router();

const createBoardController = new CreateBoardController();
const findBoardByUserController = new FindBoardByUserController();

boardRoutes.post("/", createBoardController.handle);
boardRoutes.get("/:userId", findBoardByUserController.handle);

export { boardRoutes };
