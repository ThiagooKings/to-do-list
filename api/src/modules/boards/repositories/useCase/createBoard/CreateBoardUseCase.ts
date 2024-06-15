import { inject, injectable } from "tsyringe";
import { IBoardsRepository } from "../../IBoardsRepository";
import { ICreateBoardsDTO } from "../../../dtos/ICreateBoardsDTO";
import { Board } from "@prisma/client";
import { AppError } from "../../../../../errors/AppError";

@injectable()
class CreateBoardUseCase {
  constructor(
    @inject("BoardRepository")
    private boardRepository: IBoardsRepository
  ) {}

  async execute({
    name,
    status,
    usersOnBoard,
  }: ICreateBoardsDTO): Promise<Board> {
    if (
      !usersOnBoard ||
      (usersOnBoard && usersOnBoard.length === 0) ||
      !usersOnBoard.find((user) => user.isAdmin)
    ) {
      throw new AppError(
        "You must include at least one admin user when creating a new board!"
      );
    }

    const board = await this.boardRepository.create({
      name,
      status,
      usersOnBoard,
    });

    return board;
  }
}

export { CreateBoardUseCase };
