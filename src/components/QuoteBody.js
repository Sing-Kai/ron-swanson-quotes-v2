import React, {useState} from "react";
import Quote from './Quote';
import Button from './Button';
import useFetchQuote from "../hooks/useFetchQuote";
import {url} from '../url/baseUrl'

const QuoteBody = () => {
  const [newQuote, setNewQuote] = useState(false);
  const {loading, error, quote} = useFetchQuote(url, newQuote);
  const handleOnClick = () =>{
    setNewQuote(current => !current);
  }

  if(error){
    return <div>{'Ooops error found'}</div>
  }

  if(loading){
    return <div className='App'>{'loading quotes'}</div>
  }

  return (
    <div>
        <div className='quote-container'>
          <Quote quote={quote}/>
        </div>
      <div>
          <Button text={'New Quote'} handleOnClick={handleOnClick}/>
      </div>
    </div>

  );

}

export default QuoteBody;