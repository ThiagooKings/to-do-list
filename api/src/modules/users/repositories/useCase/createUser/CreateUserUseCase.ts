import { inject, injectable } from "tsyringe";
import { ICreateUsersDTO } from "../../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../IUsersRepository";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {
  constructor (
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ){ }

  async execute ({name, email, password }: ICreateUsersDTO){

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error ("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash
    });

    return user;
  }

}

 export { CreateUserUseCase }
