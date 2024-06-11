import { Request, Response } from "express"
import { container } from "tsyringe";
import { CreateStatusUseCase } from "./CreateStatusUseCase";


class CreateStatusController {

  async handle(request: Request, response: Response) {

    const {name} = request.body;
    const createStatusUseCase = container.resolve(CreateStatusUseCase);

    const status = await createStatusUseCase.execute({ name });

    return response.status(201).json(status);
  }
}

export { CreateStatusController }
