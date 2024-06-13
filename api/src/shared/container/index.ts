import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IStatusRepository } from "../../modules/status/repositories/IStatusRepository";
import { StatusRepository } from "../../modules/status/repositories/implementations/StatusRepository";
import { IBoardsRepository } from "../../modules/boards/repositories/IBoardsRepository";
import { BoardRepository } from "../../modules/boards/repositories/implementations/BoardRepository";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IStatusRepository>(
  "StatusRepository",
  StatusRepository
);

container.registerSingleton<IBoardsRepository>(
  "BoardRepository",
  BoardRepository
)
