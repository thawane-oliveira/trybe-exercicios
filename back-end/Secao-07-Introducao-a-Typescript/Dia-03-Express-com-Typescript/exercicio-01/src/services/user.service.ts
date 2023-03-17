import IUser from '../interfaces/index';
import * as userModel from '../models/user.model';

export const getAll = async (): Promise<IUser[]> => {
  const users = await userModel.getAll();
  return users;
};

export const getById = async (id: string): Promise<IUser[]> => {
  const user = await userModel.getById(id);
  return user;
};

export const addNewUser = async (newUser: IUser): Promise<IUser[]> => {
  const checkUser = await userModel.getByEmail(newUser.email);
  if (checkUser) {return {'usuário já existente no banco de dados'}}

  const createUser = await userModel.addNewUser(newUser);

  return { createUser };
};
