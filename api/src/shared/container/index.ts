import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IStatusRepository } from "../../modules/users/repositories/IStatusRepository";
import { StatusRepository } from "../../modules/users/repositories/implementations/StatusRepository";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IStatusRepository>(
  "StatusRepository",
  StatusRepository
)
