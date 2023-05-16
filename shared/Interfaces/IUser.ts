import IOraculum from "./IOraculum";

interface IUser {
  name: string;
  createdAt: Date;
  oracula: IOraculum[];
  password: string;
}

export default IUser;
