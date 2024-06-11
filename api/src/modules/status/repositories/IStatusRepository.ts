import {Status} from ".prisma/client"
import { ICreateStatusDTO } from "../dtos/ICreateStatusDTO"

interface IStatusRepository {
  findAll(): Promise<Status[]>
  create({name}: ICreateStatusDTO): Promise<Status>
}

export {IStatusRepository }
