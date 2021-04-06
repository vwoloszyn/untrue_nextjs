
function Home() {


  return <div>
  <opensearchdescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
    <url type="text/html" method="get" template="search?q={searchTerms}"> </url
  ></opensearchdescription>
  <meta charset="UTF-8" />
  <meta
    name="description"
    content="A brand new search engine designed exclusively for retrieving Fake Stories and their Authors."
  />
  <meta name="keywords" content="Fake,Untrue,False,True,News" />
  <title>Untrue News: a fake search engine</title>
  <div id="main">
    <style dangerouslySetInnerHTML={{__html: "\n .btn-container{\n position: absolute;\n z-index:100;\n right: 5px;\n top:18px\n }\n " }} />
    <section id="banner">
      <div className="inner">
        <form className="seach" action="search">
          <h4>Making Fake Stories Findable</h4>
          <input type="text" placeholder="Search on Untrue.News ..." name="q" />
          <button type="submit"><i className="fa fa-search" />Search</button>
        </form>
        <p>
          or try <a href="?q=coronavirus">Coronavirus</a>,
          <a href="?q=refugees">Refugees</a> or
          <a href="?q=Amazon+Rainforest">Amazon Rainforest</a>
        </p>
        <div className="n_fake_stories" id="n_fake_stories">50774</div>
        <p>Fake Stories in multiple Languages</p>
        <a href="#why" className="button scrolly">Learn More</a>
      </div>
    </section>
    {/* Main */} {/* Section */}
    <section id="why" className="wrapper style1">
      <div className="inner">
        {/* 2 Columns */}
        <div className="flex flex-2">
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img
                  src="images/amazon_fire.jpg"
                  alt=""
              /></a>
            </div>
          </div>
          <div className="col col2">
            <h2>Making fake stories findable</h2>
            <p>
              Multipurpose Search Engines like Google have been used to retrieve
              all kinds of content available on Internet. However, when people
              want to get to know specifically about Fake Stories involving a
              particular person or a subject, regular search engines don't
              provide satisfying results. <br /><br />
              <b>Untrue.News</b> is a unique search engine designed exclusively
              for retrieving Fake Stories and their Authors, filling a gap left
              by Multipurpose tools.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section className="wrapper style2" id="langauges">
      <div className="inner">
        {/* 2 Columns */}
        <div className="flex flex-2">
          <div className="col col">
            <h2>Different Languages</h2>
            <p>
              What are the fake stories spread out in Austria or Brazil about
              “Greta Thunberg”? Untrue News combines fake stories in different
              languages around the same subject or person, providing unique
              results on the user’s language.
            </p>
          </div>
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img src="images/languages.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section className="wrapper style1">
      <div className="inner">
        <div className="flex flex-2">
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img src="images/research.jpg" alt=""
              /></a>
            </div>
          </div>
          <div className="col col2">
            <h2>Academic Friendly</h2>
            <p>
              This platform acts as an academic umbrella for many people
              interested in exploring different subjects. For example, User
              Experience (UX), Big Data Analytics, Open Data, Machine Learning,
              and Language Technologies. Additionally, the source code is
              available on the internet as an Open Source project, for fostering
              collaboration and the development of new tools for fighting
              disinformation.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section className="wrapper style2">
      <div className="inner">
        <div className="flex flex-2">
          <div className="col col2">
            <h2>Privacy</h2>
            <p>
              Untrue News distinguishes itself from other search engines by not
              profiling users: it shows everyone the same search results! User's
              privacy is a very important to us, and Untrue News makes sure that
              searchers' privacy is protected, while it also avoids the filter
              bubble of personalized search results.
            </p>
          </div>
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img src="images/privacy.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section id="us" className="wrapper style1">
      <div className="inner">
        <div className="flex flex-2">
          <div className="col col2">
            <h2>About Us</h2>
            <p>
              We're a collective united by a common interest: fight
              disinformation. <br /><br />If you're interested in collaborating with us,
              <a className=" scrolly" href="#contact"> drop a line ✉️ </a>.
              There's a lot to do ;)
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* Footer */}
  <footer id="footer">
    <div className="copyright">
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter"
            ><span className="label">Twitter</span></a
          >
        </li>
        <li>
          <a href="#" className="icon fa-facebook"
            ><span className="label">Facebook</span></a
          >
        </li>
        <li>
          <a href="#" className="icon fa-instagram"
            ><span className="label">Instagram</span></a
          >
        </li>
        <li>
          <a href="#" className="icon fa-snapchat"
            ><span className="label">Snapchat</span></a
          >
        </li>
      </ul>
    </div>
  </footer>
  {/* Scripts */}
</div>
  
  {/* Header */}
  <div id="main">
    <style dangerouslySetInnerHTML={{__html: "\n .btn-container{\n position: absolute;\n z-index:100;\n right: 5px;\n top:18px\n }\n " }} />
    <section id="banner">
      <div className="inner">
        <form className="seach" action="search">
          <h4>Make Fake Stories findable</h4>
          <input type="text" placeholder="Search on Untrue.News ..." name="q" />
          <button type="submit"><i className="fa fa-search" /></button>
        </form>
        <p>
          Try <a href="/search?q=coronavirus">Coronavirus </a>, 
          <a href="/search?q=refugees"> Refugees </a> or
          <a href="/search?q=Amazon+Rainforest"> Amazon Rainforest </a>
        </p>
        <div className="n_fake_stories" id="n_fake_stories">0</div>
        <p>Fake Stories in multiple Languages</p>
        <a href="#why" className="button scrolly">Learn More</a>
      </div>
    </section>
    {/* Main */} {/* Section */}
    <section id="why" className="wrapper style1">
      <div className="inner">
        {/* 2 Columns */}
        <div className="flex flex-2">
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img
                  src="images/amazon_fire.jpg"
                  alt=""
              /></a>
            </div>
          </div>
          <div className="col col2">
            <h2>Making fake stories findable</h2>
            <p>
              Multipurpose Search Engines like Google have been used to retrieve
              all kinds of content available on Internet. However, when people
              want to get to know specifically about Fake Stories involving a
              particular person or a subject, regular search engines don't
              provide satisfying results. <br /><br />
              <b>Untrue.News</b> is a unique search engine designed exclusively
              for retrieving Fake Stories and their Authors, filling a gap left
              by Multipurpose tools.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section className="wrapper style2" id="langauges">
      <div className="inner">
        {/* 2 Columns */}
        <div className="flex flex-2">
          <div className="col col">
            <h2>Different Languages</h2>
            <p>
              What are the fake stories spread out in Austria or Brazil about
              “Greta Thunberg”? Untrue News combines fake stories in different
              languages around the same subject or person, providing unique
              results on the user’s language.
            </p>
          </div>
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img src="static/templated-urban/images/languages.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section className="wrapper style1">
      <div className="inner">
        <div className="flex flex-2">
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img src="static/templated-urban/images/research.jpg" alt=""
              /></a>
            </div>
          </div>
          <div className="col col2">
            <h2>Academic Friendly</h2>
            <p>
              This platform acts as an academic umbrella for many people
              interested in exploring different subjects. For example, User
              Experience (UX), Big Data Analytics, Open Data, Machine Learning,
              and Language Technologies. Additionally, the source code is
              available on the internet as an Open Source project, for fostering
              collaboration and the development of new tools for fighting
              disinformation.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section className="wrapper style2">
      <div className="inner">
        <div className="flex flex-2">
          <div className="col col2">
            <h2>Privacy</h2>
            <p>
              Untrue News distinguishes itself from other search engines by not
              profiling users: it shows everyone the same search results! User's
              privacy is a very important to us, and Untrue News makes sure that
              searchers' privacy is protected, while it also avoids the filter
              bubble of personalized search results.
            </p>
          </div>
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img src="static/templated-urban/images/privacy.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section id="us" className="wrapper style1">
      <div className="inner">
        <div className="flex flex-2">
          <div className="col col2">
            <h2>About Us</h2>
            <p>
              We're a collective of people united by a common interest: fight
              disinformation. <br /><br />If you're interested in collaborating,
              <a className=" scrolly" href="#contact"> drop a line ✉️ </a>.
              There's still a lot to do ;)
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section id="contact" className="wrapper style2">
      <div className="inner">
        <div className="col col2">
          <h3>Get in Touch</h3>
          <form action="email/" method="post">
            {'{'}% csrf_token %{'}'}
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input name="name" id="name" type="text" placeholder="Name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" placeholder="Email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={6}
              placeholder="Message" defaultValue={""} />
            </div>
            <ul className="actions align-center">
              <br />
              <li>
                <input
                  defaultValue="Send Message"
                  className="button special"
                  type="submit"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  </div>
  {/* Footer */}
  <footer id="footer">
    <div className="copyright">
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter"
            ><span className="label">Twitter</span></a
          >
        </li>
        <li>
          <a href="#" className="icon fa-facebook"
            ><span className="label">Facebook</span></a
          >
        </li>
        <li>
          <a href="#" className="icon fa-instagram"
            ><span className="label">Instagram</span></a
          >
        </li>
        <li>
          <a href="#" className="icon fa-snapchat"
            ><span className="label">Snapchat</span></a
          >
        </li>
      </ul>
    </div>
  </footer>
  {/* Scripts */}

<div>
  {/* Urban by TEMPLATED templated.co @templatedco Released for free under the
  Creative Commons Attribution 3.0 license (templated.co/license) */}
  <opensearchdescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
    <url type="text/html" method="get" template="search?q={searchTerms}"> </url
  ></opensearchdescription>
  <meta charset="UTF-8" />
  <meta
    name="description"
    content="A brand new search engine designed exclusively for retrieving Fake Stories and their Authors."
  />
  <meta name="keywords" content="Fake,Untrue,False,True,News" />
  <meta name="author" content="Vinicius Woloszyn" />
  <title>Untrue News: a fake search engine</title>
  <link
    rel="icon"
    href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/232/police-cars-revolving-light_1f6a8.png"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="static/templated-urban/assets/css/main.css?rand=23423428"
  />
  {/* Header */} {/*
  <header id="header_" class="">
    */} {/*
    <h5><a href="#us" class="scrolly">About us </a></h5>
    */} {/*
  </header>
  */}
  <div id="main">
    <style dangerouslySetInnerHTML={{__html: "\n .btn-container{\n position: absolute;\n z-index:100;\n right: 5px;\n top:18px\n }\n " }} />
    <section id="banner">
      <div className="inner">
        <form className="seach" action="search">
          <h4>Make Fake Stories findable</h4>
          <input type="text" placeholder="Search on Untrue.News ..." name="q" />
          <button type="submit"><i className="fa fa-search" /></button>
        </form>
        <p>
          Try <a href="/search?q=coronavirus">Coronavirus</a>,
          <a href="/search?q=refugees">Refugees</a> or
          <a href="/search?q=Amazon+Rainforest">Amazon Rainforest</a>
        </p>
        <div className="n_fake_stories" id="n_fake_stories">0</div>
        <p>Fake Stories in multiple Languages</p>
        <a href="#why" className="button scrolly">Learn More</a>
      </div>
    </section>
    {/* Main */} {/* Section */}
    <section id="why" className="wrapper style1">
      <div className="inner">
        {/* 2 Columns */}
        <div className="flex flex-2">
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img
                  src="static/templated-urban/images/amazon_fire.jpg"
                  alt=""
              /></a>
            </div>
          </div>
          <div className="col col2">
            <h2>Making fake stories findable</h2>
            <p>
              Multipurpose Search Engines like Google have been used to retrieve
              all kinds of content available on Internet. However, when people
              want to get to know specifically about Fake Stories involving a
              particular person or a subject, regular search engines don't
              provide satisfying results. <br /><br />
              <b>Untrue.News</b> is a unique search engine designed exclusively
              for retrieving Fake Stories and their Authors, filling a gap left
              by Multipurpose tools.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section className="wrapper style2" id="langauges">
      <div className="inner">
        {/* 2 Columns */}
        <div className="flex flex-2">
          <div className="col col">
            <h2>Different Languages</h2>
            <p>
              What are the fake stories spread out in Austria or Brazil about
              “Greta Thunberg”? Untrue News combines fake stories in different
              languages around the same subject or person, providing unique
              results on the user’s language.
            </p>
          </div>
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img src="static/templated-urban/images/languages.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section className="wrapper style1">
      <div className="inner">
        <div className="flex flex-2">
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img src="static/templated-urban/images/research.jpg" alt=""
              /></a>
            </div>
          </div>
          <div className="col col2">
            <h2>Academic Friendly</h2>
            <p>
              This platform acts as an academic umbrella for many people
              interested in exploring different subjects. For example, User
              Experience (UX), Big Data Analytics, Open Data, Machine Learning,
              and Language Technologies. Additionally, the source code is
              available on the internet as an Open Source project, for fostering
              collaboration and the development of new tools for fighting
              disinformation.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section className="wrapper style2">
      <div className="inner">
        <div className="flex flex-2">
          <div className="col col2">
            <h2>Privacy</h2>
            <p>
              Untrue News distinguishes itself from other search engines by not
              profiling users: it shows everyone the same search results! User's
              privacy is a very important to us, and Untrue News makes sure that
              searchers' privacy is protected, while it also avoids the filter
              bubble of personalized search results.
            </p>
          </div>
          <div className="col col1">
            <div className="image round fit">
              <a href="generic.html" className="link"
                ><img src="images/privacy.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section id="us" className="wrapper style1">
      <div className="inner">
        <div className="flex flex-2">
          <div className="col col2">
            <h2>About Us</h2>
            <p>
              We're a collective of people united by a common interest: fight
              disinformation. <br /><br />If you're interested in collaborating,
              <a className=" scrolly" href="#contact"> drop a line ✉️ </a>.
              There's still a lot to do ;)
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Section */}
    <section id="contact" className="wrapper style2">
      <div className="inner">
        <div className="col col2">
          <h3>Get in Touch</h3>
          <form action="email/" method="post">
            {'{'}% csrf_token %{'}'}
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input name="name" id="name" type="text" placeholder="Name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" placeholder="Email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={6}
              placeholder="Message" defaultValue={""} />
            </div>
            <ul className="actions align-center">
              <br />
              <li>
                <input
                  defaultValue="Send Message"
                  className="button special"
                  type="submit"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  </div>
  {/* Footer */}
  <footer id="footer">
    <div className="copyright">
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter"
            ><span className="label">Twitter</span></a
          >
        </li>
        <li>
          <a href="#" className="icon fa-facebook"
            ><span className="label">Facebook</span></a
          >
        </li>
        <li>
          <a href="#" className="icon fa-instagram"
            ><span className="label">Instagram</span></a
          >
        </li>
        <li>
          <a href="#" className="icon fa-snapchat"
            ><span className="label">Snapchat</span></a
          >
        </li>
      </ul>
    </div>
  </footer>
  {/* Scripts */}
</div>
}

export default Home