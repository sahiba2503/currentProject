import cover from "../assets/cover.svg";
function Latency() {
  return (
    <div className='letencyContainer'>
      <div className='letencyContent'>
        <h5>EDITOR's PICK</h5>
        <div className='letencyimg'>
          <img src={cover} alt='' />
        </div>

        <div className='eng-per-btn'>
          <button className='eng'>Engineering</button>
          <button className='per'>Performance</button>
        </div>

        <h3>Why latency feels like distance</h3>
        <p id='every-pr'>
          Every product has a speed limit. Here's how to find yours before your
          users do - and what a 200 ms budget really buys you.
        </p>

        <div className='jD-logo'>
          <div className="list-ar-logo" style={{color:"#4F46E5",background:"#EEF0FF"}}>jk</div>
          <div className='jd-detail'>
            <strong>John Doe</strong>
            <p>
              {" "}
              <strong>john.blogify.com</strong> . 6min read
            </p>
          </div>
        </div>
      </div>
      <div className='trendingContainer'>
        <h5>Trending this week </h5>
        <div className='trending-list-container'>
          <div className='list-container'>
            <h3>01</h3>
            <div className='list-detail'>
              <div className='list-heading'>
               <div className="list-logo" style={{background:"#FDE68A"}}>PN</div> <p>Aisha Khan.aisha.blogify.com</p>
              </div>
              <h4>Designing for the second read</h4>
              <p className='date-time-publish-com'>5 min read . 612 likes</p>
            </div>
          </div>
          <hr />
          <div className='list-container'>
            <h3>02</h3>
            <div className='list-detail'>
              <div className='list-heading'>
                <div className="list-logo" style={{background:"black",color:"white"}}>AK</div>
                 <p>omar Farooq . omar.blogify.com</p>
              </div>
              <h4>A year of learning Urdu callingraphy</h4>
              <p className='date-time-publish-com'>7 min read . 389 likes</p>
            </div>
          </div>
          <hr />
          <div className='list-container'>
            <h3>03</h3>
            <div className='list-detail'>
              <div className='list-heading'>
                <div className="list-logo" style={{background:"#FDE68A"}}>OF</div>
                <p>Lucia Romero . lucia.blogify.com</p>
              </div>
              <h4>A year of learning Urdu calligraphy</h4>
              <p className='date-time-publish-com'>7 min read . 389 likes</p>
            </div>
          </div>
          <hr />
          <div className='list-container'>
            <h3>04</h3>
            <div className='list-detail'>
              <div className='list-heading'>
               <div className="list-logo" style={{background:"black",color:"white"}}>LR</div>
                <p>Lucia Romero . lucia.blogify.com</p>
              </div>
              <h4>What tide pools taught me about systems</h4>
              <p className='date-time-publish-com'>7 min read . 389 likes</p>
            </div>
          </div>
          <hr />
          <div className='list-container'>
            <h3>05</h3>
            <div className='list-detail'>
              <div className='list-heading'>
               <div className="list-logo" style={{background:"#FDE68A"}}>JD</div>
                <p>Lucia Romero . lucia.blogify.com</p>
              </div>
              <h4>Why latency feels like distance</h4>
              <p className='date-time-publish-com'>7 min read . 389 likes</p>
            </div>
          </div>
                 </div>
      </div>
    </div>
  );
}

export default Latency;
