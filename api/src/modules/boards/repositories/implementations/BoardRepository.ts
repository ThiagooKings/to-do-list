import { Board } from "@prisma/client";
import { IAlterBoardsDTO } from "../../dtos/IAlterBoardsDTO";
import { ICreateBoardsDTO } from "../../dtos/ICreateBoardsDTO";
import { IBoardsRepository } from "../IBoardsRepository";
import prismaClient from "../../../../prisma";

class BoardRepository implements IBoardsRepository {
  async create({
    name,
    status,
    usersOnBoard,
  }: ICreateBoardsDTO): Promise<Board> {
    const board = await prismaClient.board.create({
      data: {
        name,
        status: {
          create: status.map((e) => ({
            name: e.name,
            nameOnBoard: e.nameOnBoard,
          })),
        },
        users: {
          connectOrCreate: usersOnBoard.map((e) => ({
            where: {
              boardId_userId: { userId: e.userId, boardId: "" },
            },
            create: {
              userId: e.userId,
              isAdmin: e.isAdmin,
            },
          })),
        },
      },
    });

    return board;
  }
  alter({ status, usersOnBoard }: IAlterBoardsDTO): Promise<Board> {
    throw new Error("Method not implemented.");
  }

  async find(boardId: string): Promise<Board> {
    const board = await prismaClient.board.findUnique({
      where: {
        id: boardId,
      },
      include: {
        status: true,
        users: true,
      },
    });

    return board;
  }

  async findByUser(userId: string): Promise<Board[]> {
    const boards = await prismaClient.board.findMany({
      where: {
        users: {
          every: {
            userId: userId,
          },
        },
      },
      include: {
        status: true,
        users: true,
      },
    });

    return boards;
  }
}

export { BoardRepository };
