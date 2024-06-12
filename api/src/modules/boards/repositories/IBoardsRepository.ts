import { Board } from "@prisma/client"
import { ICreateBoardsDTO } from "../dtos/ICreateBoardsDTO"
import { IAlterBoardsDTO } from "../dtos/IAlterBoardsDTO";

interface IBoardsRepository {
  create({name, status, users}: ICreateBoardsDTO):Promise<Board>;
  alter({status, users}: IAlterBoardsDTO): Promise<Board>
  findByUser(userId: string):Promise<Board[]>


 }

 export { IBoardsRepository }
