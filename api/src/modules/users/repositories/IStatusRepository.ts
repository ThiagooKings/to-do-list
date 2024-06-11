import {Status} from ".prisma/client"

interface IStatusRepository {
  findAll (): Promise<Status[]>
}

export {IStatusRepository }
