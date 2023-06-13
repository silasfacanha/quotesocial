import { useQuery, useQueryClient } from "react-query/types/react";
import React, { useEffect, useState } from "react";
import IOraculum from "../../../../shared/Interfaces/IOraculum";
import IQuote from "../../../../shared/Interfaces/IQuote";
import axios from "axios";
import QuoteCarousel from "./QuoteCarousel";
import OraculaList from "./OraculaList";
function OraculaArea() {
  //fetch the oracula using axios

  return (
    <div>
      <OraculaList />
    </div>
  );
}

export default OraculaArea;
