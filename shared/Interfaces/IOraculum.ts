import IComment from "./IComment";
import IQuote from "./IQuote";
import IUser from "./IUser";

interface IOraculum {
  name: String;
  createdAt: Date;
  oraculumAuthor: IUser;
  quotes: IQuote[];
  likes: number;
  comments: IComment[];
}

export default IOraculum;
