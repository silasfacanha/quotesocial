import React, { useEffect, useState } from 'react'
import IQuote from '../../../../../shared/Interfaces/IQuote';
import axios from 'axios';
import IOraculum from '../../../../../shared/Interfaces/IOraculum';
import { useQuery, useQueryClient } from 'react-query'
import fetchMyOracula from '../../../api/fetchMyOracula';
function index() {

 

  const queryClient = useQueryClient();

  const query = useQuery("quote", fetchMyOracula);


  const [myOracula, setMyOracula] = useState<IOraculum[]>([]);

    



  return (
    <div>{query.data.map((oraculum: any) => (<h1> {oraculum}</h1> ))}</div>
  )
}

export default index 