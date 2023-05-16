import IQuote from "./IQuote";

interface Oraculum {
  name: String;
  createdAt: Date;
  quotes: IQuote[];
}

export default Oraculum;
