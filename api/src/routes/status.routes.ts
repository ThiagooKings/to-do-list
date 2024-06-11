import { Router } from "express";
import { CreateStatusController } from "../modules/status/repositories/useCase/createStatus/CreateStatusController";
import { FindStautsController } from "../modules/status/repositories/useCase/findStatus/FindStatusController";



const statusRoutes = Router();

const createStatusController = new CreateStatusController();
const findStatusController = new FindStautsController();

statusRoutes.post("/", createStatusController.handle);
statusRoutes.get("/", findStatusController.handle);

export { statusRoutes }
