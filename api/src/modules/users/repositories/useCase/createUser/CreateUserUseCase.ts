import { inject, injectable } from "tsyringe";
import { ICreateUsersDTO } from "../../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../IUsersRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../../errors/AppError";
import { User } from "@prisma/client";

@injectable()
class CreateUserUseCase {
  constructor (
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ){ }

  async execute ({name, email, password }: ICreateUsersDTO): Promise<User>{

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
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
