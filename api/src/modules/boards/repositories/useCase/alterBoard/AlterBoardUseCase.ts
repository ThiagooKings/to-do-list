import { inject, injectable } from "tsyringe";
import { IBoardsRepository } from "../../IBoardsRepository";
import { AppError } from "../../../../../errors/AppError";
import { Board } from "@prisma/client";

@injectable()
class AlterBoardUseCase {
  constructor(
    @inject("BoardRepository")
    private boardRepository: IBoardsRepository
  ) {}

  async execute({ boardId, status, usersOnBoard }): Promise<Board> {
    const board = await this.boardRepository.find(boardId);

    if (!board) {
      throw new AppError("Board does not exist!", 404);
    }

    const oldStatusIds = [];
    const oldUsersOnBoardIds = [];

    console.log(board);

    const updatedBoard = await this.boardRepository.alter({
      boardId,
      status,
      usersOnBoard,
      oldStatusIds,
      oldUsersOnBoardIds,
    });

    return updatedBoard;
  }
}

export { AlterBoardUseCase };
