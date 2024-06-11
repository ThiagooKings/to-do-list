import { inject, injectable } from "tsyringe";

import { ICreateStatusDTO } from "../../../../status/dtos/ICreateStatusDTO";
import { Status } from "@prisma/client";
import { IStatusRepository } from "../../IStatusRepository";

@injectable()
class CreateStatusUseCase {
  constructor (
    @inject("StatusRepository")
    private statusRepository: IStatusRepository
  ){ }

  async execute ({ name }: ICreateStatusDTO):Promise<Status>{

    const status = await this.statusRepository.create({ name });

    return status
  }

}

 export { CreateStatusUseCase }
