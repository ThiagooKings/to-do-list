import { inject, injectable } from "tsyringe";
import { IBoardsRepository } from "../IBoardsRepository";
import { ICreateBoardsDTO } from "../../dtos/ICreateBoardsDTO";
import { Board } from "@prisma/client";

@injectable()
class CreateBoardUseCase {
  constructor (
    @inject("BoardRepository")
    private boardRepository: IBoardsRepository
  ){ }

  async execute ({ name, status, usersOnBoard }: ICreateBoardsDTO):Promise<Board>{

    const board = await this.boardRepository.create({ name, status, usersOnBoard });

    return board
  }

}

 export { CreateBoardUseCase }
