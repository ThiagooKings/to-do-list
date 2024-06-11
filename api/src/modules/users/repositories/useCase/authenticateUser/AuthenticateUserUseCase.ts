import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../IUsersRepository";
import { AppError } from "../../../../../errors/AppError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}
@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  )
  {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User does not exists!", 404);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Emaill or password is incorrect!")
    }

    const token = sign({}, "086bec6f119951c2a07358deb5991a3e", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenResponse: IResponse = {
      user: {
        name: user.name,
        email
      },
      token
    };

    return tokenResponse;
  }
}

export { AuthenticateUserUseCase }
