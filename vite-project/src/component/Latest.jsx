
import Avatar from "../assets/Avatar.png";
import coverB from "../assets/cover (5).png";
import coverC from "../assets/cover (6).png";
import coverD from "../assets/cover (7).png";
import cover from "../assets/cover.png";
import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";
import cover01 from "../assets/cover01.png";
function Latest() {
  return (
    <div className="latestContent">
           <div className="latestuserscomments">
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
             <div className="latestRereimg"><img className="bigcover" src={cover} />
             <img className="mobilescrrencover" src={cover1} />
             </div>
             </div>
              <div className="latestContainer">
            <div className="designdetail">
          <div className="latestUserDetail">
            <img src={Avatar} /> <strong>Aisha Khan </strong><p>in aisha.blogify.com</p>
            </div>
            <div className="latestheadingcontent"><h3>The quiet economics of chai stalls</h3>
            <p>A cup costs ten rupees. The business model behind it is more resilient than most startups i've worked at.</p>
             </div>
             <div className="designBtninf"><button>Cutture</button> <p>5 min read </p></div>
             </div>
             <div className="latestRereimg"><img className="bigcover" src={coverB} />
              <img className="mobilescrrencover" src={cover3} />
             </div>
             </div>
              <div className="latestContainer">
            <div className="designdetail">
          <div className="latestUserDetail">
            <img src={Avatar} /> <strong>Aisha Khan </strong><p>in aisha.blogify.com</p>
            </div>
            <div className="latestheadingcontent"><h3>What tide pools taught me about systems</h3>
            <p>Small,self-contained worlds that survive twice-daily chaos, Your microservices could learn a thing or two.</p>
             </div>
             <div className="designBtninf"><button>Science</button> <p>5 min read </p></div>
             </div>
             <div className="latestRereimg"><img className="bigcover" src={coverC} />
              <img className="mobilescrrencover" src={cover2} />
             </div>
             </div>
              <div className="latestContainer">
            <div className="designdetail">
          <div className="latestUserDetail">
            <img src={Avatar} /> <strong>Aisha Khan </strong><p>in aisha.blogify.com</p>
            </div>
            <div className="latestheadingcontent"><h3>A year of learning Urdu calligraphy</h3>
            <p>Nastaliq taught me patience, then humility, then how to see negative space in everything i design.</p>
             </div>
             <div className="designBtninf"><button>Languages</button> <p>5 min read </p></div>
             </div>
             <div className="latestRereimg"><img className="bigcover" src={coverD} />
              <img className="mobilescrrencover" src={cover01} />
             </div>
             </div>
             </div>
             <div className="writersOuterContainer">
             <div className="writersContainer">
                      <h4>WRITERS TO READ</h4>
                <div className="writersToRead">
                   <div className="studentsDetail">
                     <img src={Avatar} />
                    <div className="studentsName"><strong>Priya Nair</strong><p>priya.blogify.com</p></div>
                    </div>
                </div>
                <div className="writersToRead">
                   <div className="studentsDetail">
                     <img src={Avatar} />
                    <div className="studentsName"><strong>Priya Nair</strong><p>priya.blogify.com</p></div>
                    </div>
                </div>
                <div className="writersToRead">
                   <div className="studentsDetail">
                     <img src={Avatar} />
                    <div className="studentsName"><strong>Priya Nair</strong><p>priya.blogify.com</p></div>
                    </div>
                </div>
                <div className="writersToRead">
                   <div className="studentsDetail">
                     <img src={Avatar} />
                    <div className="studentsName"><strong>Priya Nair</strong><p>priya.blogify.com</p></div>
                    </div>
                </div>
             </div>
             <div className="readInYOurlanguage">
                <h4>READ IN YOUR LANGUAGE</h4>
                <div className="readLanguagecontainer">
                    <div className="readLanguagecontent"><h5>English</h5><a>12.4k</a></div>
                     <div className="readLanguagecontent"><h5>English</h5><a>12.4k</a></div>
                      <div className="readLanguagecontent"><h5>English</h5><a>12.4k</a></div>
                       <div className="readLanguagecontent"><h5>English</h5><a>12.4k</a></div>
                        <div className="readLanguagecontent"><h5>English</h5><a>12.4k</a></div>
                    </div>
                
             </div>
             <div className="forwriters">
                <h5>FOR WRITERS</h5>
                <h3>Your corner of the internet</h3>
                <p>Claim your name.blogify.com in 30 seconds.Write in any language -- Quill helps every reader understand you.</p>
                <button>Claim your address</button>
             </div>
             </div>
       </div>
  )
}

export default Latest;
