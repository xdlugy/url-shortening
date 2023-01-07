import './style.css';
import logo from './images/logo.svg';
import top from './images/illustration-working.svg';
import brand from './images/icon-brand-recognition.svg';
import detailed from './images/icon-detailed-records.svg';
import customizable from './images/icon-fully-customizable.svg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import pinterest from './images/icon-pinterest.svg';
import twitter from './images/icon-twitter.svg';

function App() {
  return (
    <main>
    <header>
      <img src={logo} alt="logo" />
      <div id="menu">
        <ul>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Resources</a></li>
        </ul>
        <hr></hr>
        <button id="login">Login</button>
        <button id="signup">Sign Up</button>
      </div>
      <span>
        <div></div>
        <div></div>
        <div></div>
      </span>
    </header>
    <img src={top} id="working" alt="top" />
    <h1>More than just shorter links</h1>
    <p>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
  <button className="getstarted">Get Started</button>
  <div id="gray">
    <div id="shortendiv">
      <input type="text" placeholder="Shorten a link here..."></input>
      <button id="shortentrigger">Shorten it!</button>
    </div>
    <div className="previous">
      <p>http://localhost:3000</p>
      <hr></hr>
      <p>http://localhost:3000</p>
      <button className="copy">Copy</button>
    </div>
    <h2>Advanced Statistics</h2>
    <p>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
  <div className="box first">
    <div className="imgwrapper">
      <img src={brand}></img>
    </div>
    <h3>Brand Recognition</h3>
    <p>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
  </div>
  <div className="connect"></div>
  <div className="box">
    <div className="imgwrapper">
      <img src={detailed}></img>
    </div>
    <h3>Detailed Records</h3>
    <p>Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
  </div>
  <div className="connect"></div>
  <div className="box">
    <div className="imgwrapper">
      <img src={customizable}></img>
    </div>
    <h3>Fully Customizable</h3>
    <p>Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
  </div>
  </div>
  <div id="boost">
    <h2>Boost your links today</h2>
    <button className="getstarted">Get Started</button>
  </div>
  <footer>
    <img src={logo}></img>
    <h4>Features</h4>
    <ul>
      <li><a href="">Link shortening</a></li>
      <li><a href="">Branded Links</a></li>
      <li><a href="">Analytics</a></li>
    </ul>
    <h4>Resources</h4>
    <ul>
      <li><a href="">Blog</a></li>
      <li><a href="">Developers</a></li>
      <li><a href="">Support</a></li>
    </ul>
    <h4>Company</h4>
    <ul>
      <li><a href="">About</a></li>
      <li><a href="">Our team</a></li>
      <li><a href="">Careers</a></li>
      <li><a href="">Contact</a></li>
    </ul>
    <div id="social">
    <img src={facebook}></img>
    <img src={twitter}></img>
    <img src={pinterest}></img>
    <img src={instagram}></img>
    </div>
  </footer>
    </main>
  );
}

export default App;
