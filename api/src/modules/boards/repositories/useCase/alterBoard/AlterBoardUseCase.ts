import { inject, injectable } from "tsyringe";
import { IBoardsRepository } from "../../IBoardsRepository";
import { IAlterBoardsDTO } from "../../../dtos/IAlterBoardsDTO";
import prismaClient from "../../../../../prisma";
import { AppError } from "../../../../../errors/AppError";
import { Board } from "@prisma/client";

@injectable()
class AlterBoardUseCase {
  constructor(
    @inject("BoardRepository")
    private boardRepository: IBoardsRepository
  ) {}

  async execute({
    boardId,
    status,
    usersOnBoard,
  }: IAlterBoardsDTO): Promise<Board> {
    const board = await prismaClient.board.findUnique({
      where: { id: boardId },
    });

    if (!board) {
      throw new AppError("Board does not exist!", 404);
    }

    const updatedBoard = await this.boardRepository.alter({
      boardId,
      status,
      usersOnBoard,
    });

    return updatedBoard;
  }
}

export { AlterBoardUseCase };
