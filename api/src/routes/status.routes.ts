import { Router } from "express";
import { FindStautsController } from "../modules/users/repositories/useCase/findStatus/FindStatusController";


const statusRoutes = Router();

const findStatusController = new FindStautsController();

statusRoutes.get("/", findStatusController.handle);

export { statusRoutes }
