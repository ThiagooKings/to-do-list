import {Status} from ".prisma/client"
import { ICreateStatusDTO } from "../dtos/ICreateStatusDTO"

interface IStatusRepository {
  findAll(): Promise<Status[]>
  create({name, nameOnBoard}: ICreateStatusDTO): Promise<Status>
}

export {IStatusRepository }
