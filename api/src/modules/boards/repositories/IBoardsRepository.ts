import { Board } from "@prisma/client";
import { ICreateBoardsDTO } from "../dtos/ICreateBoardsDTO";
import { IAlterBoardsDTO } from "../dtos/IAlterBoardsDTO";

interface IBoardsRepository {
  create({ name, status, usersOnBoard }: ICreateBoardsDTO): Promise<Board>;
  alter({ status, usersOnBoard }: IAlterBoardsDTO): Promise<Board>;
  findByUser(userId: string): Promise<Board[]>;
  findBoard(boardId: string): Promise<Board>;
}

export { IBoardsRepository };
