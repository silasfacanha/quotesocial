import React, { useEffect, useState } from 'react'
import IQuote from '../../../../../shared/Interfaces/IQuote';
import axios from 'axios';

function index() {
    const [myQuotes, setMyQuotes] = useState<IQuote[]>([]);
    
    const fetchMyQuotes = async () => {
        const { data } = await axios.get<IQuote[]>("localhost:3000/quote/:userId");
        setMyQuotes(data);}

useEffect(()=>{fetchMyQuotes}, []);


  return (
    <div>{myQuotes.map(quote=> {return <h1> {quote.text}</h1>})}</div>
  )
}

export default index