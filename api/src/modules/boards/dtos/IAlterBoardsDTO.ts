import { Status, User } from "@prisma/client";

interface IAlterBoardsDTO {
  status: Status[];
  users: User[];
 }

 export { IAlterBoardsDTO }
