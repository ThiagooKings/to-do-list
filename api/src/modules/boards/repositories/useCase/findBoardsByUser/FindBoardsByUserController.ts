import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBoardsByUserUseCase } from "./FindBoardsByUserUseCase";

class FindBoardsByUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const findBoardByUserUseCase = container.resolve(FindBoardsByUserUseCase);

    const boards = await findBoardByUserUseCase.execute({ userId });

    return response.status(200).json(boards);
  }
}

export { FindBoardsByUserController };
