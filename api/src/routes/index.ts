import { Router } from "express";
import { userRoutes } from "./users.routes";
import { statusRoutes } from "./status.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/status", statusRoutes)

export { routes }
