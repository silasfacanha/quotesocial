import IPost from "./IPost";
import IUser from "./IUser";

interface IComment {
  commentedPost: IPost;
  commentAuthor: IUser;
  text: string;
  likes: number;
  createdAt: Date;
}

export default IComment;
