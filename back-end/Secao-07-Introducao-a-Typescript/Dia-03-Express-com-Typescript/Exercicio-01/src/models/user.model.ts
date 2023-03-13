import IUser from "../interfaces";
import connection from "./connection";

export const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM Users;');
  return rows as IUser[];
};

// export default {
//   getAll,
// };