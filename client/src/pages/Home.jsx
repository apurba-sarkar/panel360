import "../styles/home.css";
const Home = () => {
  return (
    <div>
      <div className="secondary">Join Us at panel360, a conference by slack, in IN</div>
      <div className="container">
        <div>
          <img
            src="/heroiconreg.jpg"
           className="heroiconreg"
          />
        </div>
        <div className="sub-container">
          <div className="h1">
            <h1 >Where Work</h1>
            <h1 >Happens</h1>
          </div>
          <div className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            esse voluptatem ab totam, laborum vero molestias quisquam
            voluptatibus eligendi cum similique excepturi odio ducimus
            voluptates magni perspiciatis soluta, minus fugiat.
          </div>
          <div className="login">
            Already using Panel360 <a href="/login" className="link">Sign in &#8594;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
