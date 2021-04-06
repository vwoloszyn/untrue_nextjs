import useSwr from 'swr'
import Link from 'next/link'
import router from 'next/router'
import { useRouter } from 'next/router'

const fetcher = (url) => fetch(url).then((res) => res.json())


import 'terminal.css'

export default function Search(){
  
    const router = useRouter()
    const { data, error } = useSwr(["/api/search?q="+router.query.q, ],(url, params) => fetcher(url, params));

    return  <div>
              <div className="header" >
              <h5 class="terminal-prompt">UNTRUE.NEWS:</h5>
                  <div class="terminal-nav">
                  
                    <div class="terminal-logo">
                      
                      <form className="search" action="search" >
                        <input id="q" name="q" type="text" required="" minlength="2" placeholder="Search..." defaultValue={router.query.q}></input>
                        <button type="submit" class="btn btn-default">Find</button>
                      </form>
                    </div>
                    <nav class="terminal-menu">
                      <ul>
                        <li><a class="menu-item" href="/#why">Learn More</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
            <hr></hr>
           <dl classname="terminal">
           {error && <div>Failed to load data</div>}
           {!error && !data && <div>Loading data...</div>}
           {!error && data && data.data && (data.data.webPages.value.map((r) => (
              <dt> <a class="menu-item" href="{r.url}"> {r.name}</a>
                <blockquote>
                  <p>{r.snippet}</p>
                  <footer>
                    <cite><a class="menu-item" href={r.url}>{r.url}</a></cite>
                  </footer>
                </blockquote>
              </dt>
            )))}
          </dl>
        </div>
}
