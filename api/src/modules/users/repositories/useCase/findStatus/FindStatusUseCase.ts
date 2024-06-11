import { inject, injectable } from "tsyringe";
import { IStatusRepository } from "../../IStatusRepository";
import { AppError } from "../../../../../errors/AppError";

@injectable()
class FindStatusUseCase {
  constructor (
    @inject("StatusRepository")
    private statusRepository: IStatusRepository
  ){ }

  async execute (){

    const allStatus = await this.statusRepository.findAll();

    if (allStatus.length === 0) {
      throw new AppError("None status exists yet!", 404);
    }

    return allStatus;
  }

}

 export { FindStatusUseCase }
