import { Status } from "@prisma/client";
import { IStatusRepository } from "../IStatusRepository";
import prismaClient from "../../../../prisma";
import { ICreateStatusDTO } from "../../dtos/ICreateStatusDTO";

class StatusRepository implements IStatusRepository {
  async create({name, nameOnBoard}: ICreateStatusDTO): Promise<Status> {

    const status = await prismaClient.status.create({data: {name, nameOnBoard}});

    return status;
  }

  async findAll(): Promise<Status[]> {

    const status = await prismaClient.status.findMany();

    return status as Status[];
  }


}

export { StatusRepository }
