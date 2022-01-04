import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadExists = this.usersRepository.findById(user_id)

    if(!userAlreadExists){
      throw new Error("Mensagem do erro");
    }

    const turnAndmin = this.usersRepository.turnAdmin(userAlreadExists)

    return turnAndmin;
  }
}

export { TurnUserAdminUseCase };
