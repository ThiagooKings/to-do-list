import { inject, injectable } from "tsyringe";
import { IBoardsRepository } from "../../IBoardsRepository";
import { Board } from "@prisma/client";
import { AppError } from "../../../../../errors/AppError";

@injectable()
class FindBoardsByUserUseCase {
  constructor(
    @inject("BoardRepository")
    private boardRepository: IBoardsRepository
  ) {}

  async execute({ userId }): Promise<Board[]> {
    const boards = await this.boardRepository.findByUser(userId);

    if (!boards || (boards && boards.length === 0)) {
      throw new AppError("None board has been found", 404);
    }

    return boards;
  }
}

export { FindBoardsByUserUseCase };
