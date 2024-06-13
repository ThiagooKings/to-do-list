interface IStatusDTO {
  name: string;
  nameOnBoard: string;
}

interface IUserDTO {
userId: string,
isAdmin: boolean

}
interface ICreateBoardsDTO {
  name: string;
  status: IStatusDTO[];
  usersOnBoard: IUserDTO[];
 }

 export {ICreateBoardsDTO }
