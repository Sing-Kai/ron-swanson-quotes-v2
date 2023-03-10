import React, {useState} from "react";
import './App.css';
import Quote from './components/Quote';
import Button from './components/Button';
import useFetchQuote from "./hooks/useFetchQuote";
import {url} from './url/baseUrl'

function App() {

  const [newQuote, setNewQuote] = useState(false);
  const {loading, error, quote} = useFetchQuote(url, newQuote);
  const handleOnClick = () =>{
    setNewQuote(current => !current);
  }

  if(error){
    return <div>{'Ooops error found'}</div>
  }

  if(loading){
    return <div>{'loading quotes'}</div>
  }

  return (
    <div >
      <Quote quote={quote}/>
      <Button text={'New Quote'} handleOnClick={handleOnClick}/>
    </div>
  );
}

export default App;
