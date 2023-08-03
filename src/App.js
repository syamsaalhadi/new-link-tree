import ParticlesBg from 'particles-bg'
import './App.css';
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function App() {
  return (
    <div>
      <div className="card">
        <div className="card_body"></div>
          <div className="profile text-center">
            <img src="/deku.png" className="avatar"/>
            <div className="bg_content rd_12 p_8">
            <h1>@syamsaal.js</h1>
            <p>Hi I'm Syamsa Al Hadi</p>
            <p>i'm a front end web developer</p>
            <h5>This is my social media</h5>
            </div>
          </div>
        <div className="nt-16">
            <a className="btn_action bg_content" href="/https://instagram.com/syamsaal.js?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
            <BsInstagram/>
              <span>Instagram</span>
            </a>
        </div>
        <div className="nt-16">
            <a className="btn_action bg_content" href="/http://tiktok.com/@syamsaal">
              <FaTiktok/>
              <span>Tiktok</span>
            </a>
        </div>
        <div className="nt-16">
            <a className="btn_action bg_content" href="/https://github.com/xallishere">
            <BsGithub/>
              <span>Github</span>
            </a>
        </div>
        <div className="nt-16">
            <a className="btn_action bg_content" href="/https://www.linkedin.com/in/syamsa-al-hadi-009408267">
            <BsLinkedin/>
              <span>Linkedin</span>
            </a>
        </div>
        
        
      </div>
       <ParticlesBg type="thick" bg={true} />
       <div className="cpr"><p>create by syamsa al hadi</p></div>
    </div>
    
  );
}

export default App;
