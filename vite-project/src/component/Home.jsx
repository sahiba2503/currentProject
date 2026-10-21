import Navbar from "./Navbar";
import Latency from "./Latency";
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
        <Latency />
           </div>
        </div>
     
  );
}

export default Home;
