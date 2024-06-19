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
  oldStatusIds: string[];
  usersOnBoard: IUserDTO[];
  oldUsersOnBoardIds: string[];
}

export { IAlterBoardsDTO };
