import IUser from "../interfaces";
import connection from "./connection";

export const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM Users;');
  return rows as IUser[];
};

export const getById = async (id: string) => {
  const [row] = await connection.execute('SELECT * FROM Users WHERE id = ?;', [id]);
  return row as IUser[];
};

export const getByEmail = async (email: string) => {
  const [row] = await connection.execute('SELECT * FROM Users WHERE email = ?', [email]);

  return row as IUser[];
};

export const addNewUser = async (newUser: IUser) => {
  const { name, email, password } = newUser;
  const [row] = await connection.execute('INSERT INTO Users (name, email, password) VALUES (?, ?, ?);', [name, email, password]);
  return row as IUser[];
};

// export default {
//   getAll,
// };