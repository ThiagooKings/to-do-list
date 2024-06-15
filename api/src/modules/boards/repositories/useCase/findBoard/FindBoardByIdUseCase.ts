import { inject, injectable } from "tsyringe";
import { IBoardsRepository } from "../../IBoardsRepository";
import { Board } from "@prisma/client";
import { AppError } from "../../../../../errors/AppError";

@injectable()
class FindBoardByIdUseCase {
  constructor(
    @inject("BoardRepository")
    private boardRepository: IBoardsRepository
  ) {}

  async execute(boardId: string): Promise<Board> {
    const board = await this.boardRepository.find(boardId);

    if (!board) {
      throw new AppError("This board does not exist!", 404);
    }

    return board;
  }
}

export { FindBoardByIdUseCase };
