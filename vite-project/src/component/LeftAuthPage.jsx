import "./auth.css";
import bloglogo from "../assets/mark.jpg";
import Avatar from "../assets/Avatar.png";
function leftsignup() {
  return (
    <div className='leftAuthenPart'>
      <div className='blogifyContainer'>
        <img src={bloglogo} alt='Food' />
        <strong>Blogify</strong>
      </div>
      <div className='ithinkContainer'>
        <div>
          <p>
            <i>
              I think in Hindi and write in English. Quill made me brave enough
              to hit publish.
            </i>
          </p>
        </div>
        <div className='jdContainer'>
          <div>
            <img src={Avatar} alt='Food' />
          </div>
          <div>
            <p>john Done</p>
            <p>john.blogify.com. writing since 2024</p>
          </div>
        </div>

        <div className='translateContainer'>
          <h6>TRANSLATED.HINDI</h6>
          <i>"feels like distance"</i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            officiis quae iure facere cupiditate sint cum,{" "}
          </p>
          <h4>Show original</h4>
        </div>
      </div>
      <div>
        <p>12,400 writers . 5 languages one very helpful Quill</p>{" "}
      </div>
    </div>
  );
}

export default leftsignup;
