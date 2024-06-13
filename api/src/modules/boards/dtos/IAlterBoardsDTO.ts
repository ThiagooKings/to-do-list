import { Status, User } from "@prisma/client";

interface IAlterBoardsDTO {
  status: Status[];
  usersOnBoard: [{
    user: User,
    isAdmin: boolean
   }];
 }

 export { IAlterBoardsDTO }
