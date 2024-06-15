import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBoardByIdUseCase } from "./FindBoardByIdUseCase";

class FindBoardsByIdController {
  async handle(request: Request, response: Response) {
    const { boardId } = request.params;

    const findBoardByIdUseCase = container.resolve(FindBoardByIdUseCase);

    const board = await findBoardByIdUseCase.execute(boardId);

    return response.status(200).json(board);
  }
}

export { FindBoardsByIdController };
