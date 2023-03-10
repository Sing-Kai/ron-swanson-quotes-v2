import {url} from '../url/baseUrl'

const getQuote = async () => {
  const response = await fetch(url)
  const data = await response.json();
  return data[0]
}

export default getQuote;