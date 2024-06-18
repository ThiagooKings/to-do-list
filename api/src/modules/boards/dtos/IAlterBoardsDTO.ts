interface IStatusDTO {
  id: string;
  name: string;
  nameOnBoard: string;
}

interface IUserDTO {
  userId: string;
  isAdmin: boolean;
}

interface IAlterBoardsDTO {
  boardId: string;
  status: IStatusDTO[];
  usersOnBoard: IUserDTO[];
}

export { IAlterBoardsDTO };
