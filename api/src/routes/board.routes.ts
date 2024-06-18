import { Router } from "express";
import { CreateBoardController } from "../modules/boards/repositories/useCase/createBoard/CreateBoardController";
import { FindBoardsByUserController } from "../modules/boards/repositories/useCase/findBoardsByUser/FindBoardsByUserController";
import { FindBoardsByIdController } from "../modules/boards/repositories/useCase/findBoard/FindBoardByIdController";
import { AlterBoardController } from "../modules/boards/repositories/useCase/alterBoard/AlterBoardController";

const boardRoutes = Router();

const createBoardController = new CreateBoardController();
const findBoardByUserController = new FindBoardsByUserController();
const findBoardByIdController = new FindBoardsByIdController();
const alterBoardController = new AlterBoardController();

boardRoutes.post("/", createBoardController.handle);
boardRoutes.get("/findByUser/:userId", findBoardByUserController.handle);
boardRoutes.get("/findById/:boardId", findBoardByIdController.handle);
boardRoutes.put("/", alterBoardController.handle);

export { boardRoutes };
