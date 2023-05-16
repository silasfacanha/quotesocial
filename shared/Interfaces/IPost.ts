import IQuote from "./IQuote";

interface IPost {
  quote: IQuote;
  postText: string;
  createdAt: Date;
  likes: number;
}

export default IPost;
