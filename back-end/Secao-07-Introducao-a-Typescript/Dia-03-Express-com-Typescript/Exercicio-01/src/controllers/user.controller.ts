import { Request, Response } from 'express';
import * as userService from '../services/user.service';

// interface requestMe {
//   user: { token:string }
// };

export const getAll = async (req: Request, res: Response) => {
  // const { token } = req.body;
  const result = userService.getAll();
  return res.status(200).json(result);
};
