import { Router } from "express";
import { CreateBoardController } from "../modules/boards/repositories/useCase/createBoard/CreateBoardController";
import { FindBoardsByUserController } from "../modules/boards/repositories/useCase/findBoardsByUser/FindBoardsByUserController";
import { FindBoardsByIdController } from "../modules/boards/repositories/useCase/findBoard/FindBoardByIdController";

const boardRoutes = Router();

const createBoardController = new CreateBoardController();
const findBoardByUserController = new FindBoardsByUserController();
const findBoardByIdController = new FindBoardsByIdController();

boardRoutes.post("/", createBoardController.handle);
boardRoutes.get("/findByUser/:userId", findBoardByUserController.handle);
boardRoutes.get("/findById/:boardId", findBoardByIdController.handle);

export { boardRoutes };
