import { Status, User } from "@prisma/client";

interface ICreateBoardsDTO {
  name: string;
  status: Status[];
  users: User[];
 }

 export {ICreateBoardsDTO }
