import { ICreateUsersDTO } from "../../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../IUsersRepository";

class CreateUserUseCase {
  constructor (
    private userRepository: IUsersRepository
  ){ }

  async execute ({name, email, password }: ICreateUsersDTO){

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error ("User already exists!");
    }

    const user = await this.userRepository.create({
      name,
      email,
      password
    });

    return user;
  }

}

 export { CreateUserUseCase }
