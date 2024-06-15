import { inject, injectable } from "tsyringe";
import { IBoardsRepository } from "../../IBoardsRepository";
import { Board } from "@prisma/client";

@injectable()
class FindBoardByUserUseCase {
  constructor(
    @inject("BoardRepository")
    private boardRepository: IBoardsRepository
  ) {}

  async execute({ userId }): Promise<Board[]> {
    const board = await this.boardRepository.findByUser(userId);

    return board;
  }
}

export { FindBoardByUserUseCase };
