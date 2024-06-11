import { Request, Response } from "express"
import { container } from "tsyringe";
import { FindStatusUseCase } from "./FindStatusUseCase";

class FindStautsController {

  async handle(request: Request, response: Response) {


    const findStatusUseCase = container.resolve(FindStatusUseCase);

    const allStatus = await findStatusUseCase.execute();

    return response.status(200).json(allStatus);
  }
}

export { FindStautsController }
