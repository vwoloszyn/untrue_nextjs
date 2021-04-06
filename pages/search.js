import useSwr from 'swr'
import Link from 'next/link'
import router from 'next/router'
import { useRouter } from 'next/router'


const fetcher = (url) => fetch(url).then((res) => res.json())



export default function Search(){
    const router = useRouter()
    const { data, error } = useSwr(["/api/search?q="+router.query.q, ],(url, params) => fetcher(url, params));

    return  <div><div className="header" >
                <div className="center logo" ><a href="/"> UNTRUE.NEWS: </a></div>
                <div id="" className="">
                    <form className="search" action="search" >
                        <input type="text" placeholder="Search.." name="q" defaultValue={router.query.q}></input>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div> 
           <ul>
           {error && <div>Failed to load data</div>}
           {!error && !data && <div>Loading data...</div>}
           {!error && data && data.data && (data.data.webPages.value.map((r) => (
              <li key={r.id}>
                <a href="{r.url}">{r.name}</a>
                <h6><a href="{r.url}">{r.url}</a></h6>
                <p>{r.snippet}</p>
                
              </li>
            )))}
          </ul></div>
}
