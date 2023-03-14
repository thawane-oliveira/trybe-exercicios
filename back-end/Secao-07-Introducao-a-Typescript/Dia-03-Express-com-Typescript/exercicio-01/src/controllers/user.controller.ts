import { Request, Response } from 'express';
import IUser from '../interfaces';
import * as userService from '../services/user.service';

export const getAll = async (_req: Request, res: Response) => {
  const result = await userService.getAll();
  return res.status(200).json(result);
};

export const getById = async (req: Request, res: Response) => {
  const {id} = req.params;
  // console.log(id, typeof id, 'x');
  const result = await userService.getById(id);
  return res.status(200).json(result);
};

export const addNewUser = async (req: Request, res: Response) => {
  const newUser = req.body as IUser;

  const createUser = await userService.addNewUser(newUser);
  res.status(200).json(createUser);
};
