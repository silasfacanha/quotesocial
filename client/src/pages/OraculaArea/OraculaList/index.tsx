import React, { useEffect, useState } from 'react'
import IQuote from '../../../../../shared/Interfaces/IQuote';
import axios from 'axios';
import IOraculum from '../../../../../shared/Interfaces/IOraculum';

function index() {
    const [myOracula, setMyOracula] = useState<IOraculum[]>([]);

    
    const fetchMyOracula = async () => {
        const { data } = await axios.get<Array<IOraculum>>("localhost:3000/quote/:userId");
        setMyOracula(data);}

useEffect(()=>fetchMyOracula, []);

  return (
    <div>{myOracula.map(oraculum => {return <h1> {oraculum.name}</h1>})}</div>
  )
}

export default index 