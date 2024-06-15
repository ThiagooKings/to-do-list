import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBoardByUserUseCase } from "./FindBoardByUserUseCase";

class FindBoardByUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const findBoardByUserUseCase = container.resolve(FindBoardByUserUseCase);

    const boards = await findBoardByUserUseCase.execute({ userId });

    return response.status(200).json(boards);
  }
}

export { FindBoardByUserController };
