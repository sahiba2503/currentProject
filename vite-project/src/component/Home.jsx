import Navbar from "./Navbar";
import Latency from "./Latency";
import Latestlist from "./Latestlist";
import Storiesworth from "./Storiesworth";
import Latest from "./Latest";

function Home() {
  return (
    <div>
      <Navbar />
      <div className='homeContainer'>
        <Storiesworth />
        <Latency />
       <Latestlist />
         <Latest />       
           </div>
        </div>
     
  );
}

export default Home;
