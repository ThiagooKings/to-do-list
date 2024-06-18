import { Request, Response } from "express";
import { container } from "tsyringe";
import { AlterBoardUseCase } from "./AlterBoardUseCase";

class AlterBoardController {
  async handle(request: Request, response: Response) {
    const { boardId, status, usersOnBoard } = request.body;

    const alterBoardUseCase = container.resolve(AlterBoardUseCase);

    const board = await alterBoardUseCase.execute({
      boardId,
      status,
      usersOnBoard,
    });

    return response.status(201).json(board);
  }
}

export { AlterBoardController };
