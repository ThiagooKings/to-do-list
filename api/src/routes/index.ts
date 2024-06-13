import { Router } from "express";
import { userRoutes } from "./users.routes";
import { statusRoutes } from "./status.routes";
import { boardRoutes } from "./board.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/status", statusRoutes)
routes.use("/boards", boardRoutes)

export { routes }
