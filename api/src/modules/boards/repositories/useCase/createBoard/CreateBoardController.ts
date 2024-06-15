import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateBoardUseCase } from "./CreateBoardUseCase"

class CreateBoardController {

  async handle(request: Request, response: Response) {

    const {name, status, usersOnBoard} = request.body

    const createBoardUseCase = container.resolve(CreateBoardUseCase)

    const board = await createBoardUseCase.execute({name, status, usersOnBoard})

    return response.status(201).json(board)

   }

}

export { CreateBoardController }
