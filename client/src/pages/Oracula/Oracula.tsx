import { useQuery, useQueryClient } from "react-query/types/react";
import React, { useEffect, useState } from "react";
import IOraculum from "../../../../shared/Interfaces/IOraculum";
import IQuote from "../../../../shared/Interfaces/IQuote";

function Oracula() {
  const [oracula, setOracula] = useState<IOraculum[] | any>([]);
  const [quotes, setQuotes] = useState<IQuote[] | any>([]);

  return (
    <div>
      <h1> Here are your Oracula! </h1>
      <h2> Store your wisdom here </h2>
      <div> Oracula </div>
      <div> </div>
    </div>
  );
}

export default Oracula;
