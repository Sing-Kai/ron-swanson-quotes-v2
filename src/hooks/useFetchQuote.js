import { useState, useEffect} from "react";

const useFetchQuote = (url, newQuote) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [quote, setquote] = useState([])

  useEffect(()=>{
    fetchData(url)
  }, [newQuote])

  const fetchData = async (url) => {
    try{
      await setLoading(true);
      await setError(false);
      const res = await fetch(url);
      const data = await res.json();
      await setquote(data)
      setLoading(false);
    } catch (err){
      setError(true);
    }
  }
  return {loading, error, quote}
}

export default useFetchQuote