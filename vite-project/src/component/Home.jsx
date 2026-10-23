import Navbar from "./Navbar";
import Latency from "./Latency";
import Latestlist from "./Latestlist";
import Storiesworth from "./Storiesworth";
import Avatar from "../assets/Avatar.png";
import cover from "../assets/cover.png";
function Home() {
  return (
    <div>
      <Navbar />
      <div className='homeContainer'>
        <Storiesworth />
        <Latency />
       <Latestlist />

       <div className="latestContent">
          <h4>Latest</h4>
          <div className="latestContainer">
            <div className="designdetail">
          <div className="latestUserDetail">
            <img src={Avatar} /> <strong>Aisha Khan </strong><p>in aisha.blogify.com</p>
            </div>
            <div className="latestheadingcontent"><h3>Designing for the second read</h3>
            <p>Most people skin first and read later. Good layout reward both -- here are five patterns that do.</p>
             </div>
             <div className="designBtninf"><button>Design</button> <p>5 min read </p></div>
             </div>
             <div className="latestRereimg"><img src={cover} /></div>
             </div>
              <div className="latestContainer">
            <div className="designdetail">
          <div className="latestUserDetail">
            <img src={Avatar} /> <strong>Aisha Khan </strong><p>in aisha.blogify.com</p>
            </div>
            <div className="latestheadingcontent"><h3>Designing for the second read</h3>
            <p>Most people skin first and read later. Good layout reward both -- here are five patterns that do.</p>
             </div>
             <div className="designBtninf"><button>Design</button> <p>5 min read </p></div>
             </div>
             <div className="latestRereimg"><img src={cover} /></div>
             </div>
              <div className="latestContainer">
            <div className="designdetail">
          <div className="latestUserDetail">
            <img src={Avatar} /> <strong>Aisha Khan </strong><p>in aisha.blogify.com</p>
            </div>
            <div className="latestheadingcontent"><h3>Designing for the second read</h3>
            <p>Most people skin first and read later. Good layout reward both -- here are five patterns that do.</p>
             </div>
             <div className="designBtninf"><button>Design</button> <p>5 min read </p></div>
             </div>
             <div className="latestRereimg"><img src={cover} /></div>
             </div>
              <div className="latestContainer">
            <div className="designdetail">
          <div className="latestUserDetail">
            <img src={Avatar} /> <strong>Aisha Khan </strong><p>in aisha.blogify.com</p>
            </div>
            <div className="latestheadingcontent"><h3>Designing for the second read</h3>
            <p>Most people skin first and read later. Good layout reward both -- here are five patterns that do.</p>
             </div>
             <div className="designBtninf"><button>Design</button> <p>5 min read </p></div>
             </div>
             <div className="latestRereimg"><img src={cover} /></div>
             </div>
       </div>
           </div>
        </div>
     
  );
}

export default Home;
