import { Status } from "@prisma/client";
import { IStatusRepository } from "../IStatusRepository";
import prismaClient from "../../../../prisma";

class StatusRepository implements IStatusRepository {
  async findAll(): Promise<Status[]> {

    const status = await prismaClient.status.findMany();

    return status as Status[];
  }


}

export { StatusRepository }
