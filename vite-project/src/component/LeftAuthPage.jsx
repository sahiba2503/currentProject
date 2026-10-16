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
        <div className='IthinkHindi'>
          <p>
            I think in Hindi and write in English. Quill made me brave enough to
            hit publish.
          </p>
        </div>
        <div className='jdContainer'>
          <img src={Avatar} alt='Food' />
          <div>
            <strong>john Done</strong>
            <p>john.blogify.com. writing since 2024</p>
          </div>
        </div>

        <div className='translateContainer'>
          <strong>TRANSLATED.HINDI</strong>
          <i>"feels like distance"</i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            officiis quae iure facere cupiditate sint cum,{" "}
          </p>
          <strong>Show original</strong>
        </div>
      </div>
      <div>
        <p>12,400 writers . 5 languages one very helpful Quill</p>{" "}
      </div>
    </div>
  );
}

export default leftsignup;
