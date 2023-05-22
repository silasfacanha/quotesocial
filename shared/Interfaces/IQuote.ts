import IUser from "./IUser";

interface IQuote {
  text: string;
  author: string;
  source: string;
  quoteProvider: IUser;
  createdAt: Date;
}

export default IQuote;
