import './style.css';
import logo from './images/logo.svg';
import top from './images/illustration-working.svg';

function App() {
  return (
    <main>
    <header>
      <img src={logo} alt="logo" />
      {/*<ul>
        <li><a href="">Features</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">Resources</a></li>
  </ul>*/}
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
  <button id="getstarted">Get Started</button>
    </main>
  );
}

export default App;
