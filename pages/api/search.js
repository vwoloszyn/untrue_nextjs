import axios from 'axios';
import { useRouter } from 'next/router'

const subscription_Key = process.env.MS_KEY 
const fetcher = (url) => fetch(url).then((res) => res.json())

export default async (req, res) => {
  const apiUrl = `https://api.bing.microsoft.com/v7.0/custom/search?q=${req.query.q}&customconfig=aa4cb704-09bd-4860-a118-d0d87ba885b7&mkt=en-US`
  await axios
    .get(apiUrl,{headers: {'Ocp-Apim-Subscription-Key': subscription_Key}})
    .then(({ data }) => {
      res.setHeader("Cache-Control","s-maxage=30, stale-while-revalidade")
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}