import Navbar from "./Navbar";
import cover from "../assets/cover.svg";
import avatar from "../assets/Avatar.png";
function Home() {
  return (
    <div>
      <Navbar />
      <div className='homeContainer'>
        <div className='mainContainer'>
          <div className='storiesContainer'>
            <h5> READ.WRITE.UDERSTAND</h5>
            <h1>Stories worth understanding.</h1>
            <p>
              Independent writer, their own addresses, and Quill in the margin-
              so any line in any post can be explained, simplified, questioned
              or translated in a tap.
            </p>
            <h4>your blog address</h4>
            <input type='text' placeholder='https://yourname.blogify.com' />
            <button>Claim it</button>
            <h6>yourname.blogify.com is available</h6>
          </div>
          <div className='tryItContainer'>
            <h6>TRY IT - SELECT ANY LINE</h6>
            <ul className='listContainer'>
              <li>Explain</li>
              <li>Simplify</li>
              <li>Counter</li>
              <li>Translate</li>
            </ul>
            <div className='feelContainer'>
              <div className='feelDetailContent'>
                <p>
                  When a response takes too long, it feels like distance - as if
                  the app lives somewhere far away.
                </p>
              </div>

              <div className='explainedContainer'>
                <strong>EXPLAINED X</strong>
                <i>Feels like distance</i>
                <p>
                  Latency is the delay between your action and the response.Like
                  distance, every hop a request makes adds travel time - even
                  when servers are close.
                </p>
                <div className='explainedBtnContainer'>
                  <button>simpler</button>
                  <button>Go deeper</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='letencyContainer'>
          <div className="letencyContent">
          <h5>EDITOR's PICK</h5>
          <div className="letencyimg">
          <img src={cover} alt='' />
          </div>
           
           
            <div className="eng-per-btn">
             <button className="eng">Engineering</button>
               <button className="per">Performance</button>
             </div>
           
          <h3>Why latency feels like distance</h3>
          <p>
            Every product has a speed limit. Here's how to find yours before
            your users do - and what a 200 ms budget really buys you.
          </p>
          <div>
            
            <div className="jD-logo">
              <img src={avatar} alt="" />
              <div className="jd-detail">
               <strong>John Doe</strong>
              <p>john.blogify.com . 6min read</p>
              </div>
              
            </div>
          </div>
          </div>
          <div className="trendingContainer">
            <h5>Trending this week </h5>
            <div className="trending-list-container">
            <div className="list-container">
              <h3>01</h3>
              <div className="list-detail">
               <div className="list-heading"><img src={avatar} alt="" /> <p>John Doe</p></div>
              <h5>john.blogify.com . 6min read</h5>
              <p>likes</p>
              
              </div>
              </div>
              <div className="list-container">
              <h3>01</h3>
              <div className="list-detail">
               <div className="list-heading"><img src={avatar} alt="" /> <p>John Doe</p></div>
              <h5>john.blogify.com . 6min read</h5>
              <p>likes</p>
              </div>
              </div>
              <div className="list-container">
              <h3>01</h3>
              <div className="list-detail">
               <div className="list-heading"><img src={avatar} alt="" /> <p>John Doe</p></div>
              <h5>john.blogify.com . 6min read</h5>
              <p>likes</p>
              </div>
              </div>
              <div className="list-container">
              <h3>01</h3>
              <div className="list-detail">
               <div className="list-heading"><img src={avatar} alt="" /> <p>John Doe</p></div>
               <h5>john.blogify.com . 6min read</h5>
              <p>likes</p>
              </div>
              </div>
            </div>
            
          </div>
          </div>
           </div>
        </div>
     
  );
}

export default Home;
