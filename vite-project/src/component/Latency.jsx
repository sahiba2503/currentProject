
import cover from "../assets/cover.svg";
import avatar from "../assets/Avatar.png";
import avatar2 from "../assets/Avatar (2).png";
function Latency() {
  return (
    <div>
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
               <div className="list-heading"><img src={avatar2} alt="" /> <p>Aisha Khan.aisha.blogify.com</p></div>
              <h5>Designing for the second read</h5>
              <p>5 min read . 612 likes</p>
              </div>
              </div>
              <div className="list-container">
              <h3>02</h3>
              <div className="list-detail">
               <div className="list-heading"><img src={avatar2} alt="" /> <p>omar Farooq . omar.blogify.com</p></div>
              <h5>A year of learning Urdu callingraphy</h5>
              <p>7 min read . 389 likes</p>
              </div>
              </div>
              <div className="list-container">
              <h3>03</h3>
              <div className="list-detail">
               <div className="list-heading"><img src={avatar2} alt="" /> <p>Lucia Romero . lucia.blogify.com</p></div>
               <h5>A year of learning Urdu calligraphy</h5>
              <p>7 min read . 389 likes</p>
              </div>
              </div>


                <div className="list-container">
              <h3>04</h3>
              <div className="list-detail">
               <div className="list-heading"><img src={avatar2} alt="" /> <p>Lucia Romero . lucia.blogify.com</p></div>
               <h5>What tide pools taught me about systems</h5>
              <p>7 min read . 389 likes</p>
              </div>
              </div>
                <div className="list-container">
              <h3>05</h3>
              <div className="list-detail">
               <div className="list-heading"><img src={avatar2} alt="" /> <p>Lucia Romero . lucia.blogify.com</p></div>
               <h5>Why latency feels like distance</h5>
              <p>7 min read . 389 likes</p>
              </div>
              </div>
              <div className="list-container">
              <h3>06</h3>
              <div className="list-detail">
               <div className="list-heading"><img src={avatar2} alt="" /> <p>Priya Nair.priya.blogify.com</p></div>
              <h5>The quiet ecomomics of chai stalls</h5>
              <p>9 min read . 248 likes</p>
              
              </div>
              </div>
            </div>
            
          </div>
          </div>
    </div>
  )
}

export default Latency
