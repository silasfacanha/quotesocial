import IOraculum from "./IOraculum";
import IQuote from "./IQuote";

interface IUser {
  name: string;
  password: string;
  friends: string[];
  createdAt: Date;
  oracula: IOraculum[];
  addedQuotes: IQuote[];
  likedQuotes: IQuote[];
  wiseFriends: IUser[];
}

export default IUser;
