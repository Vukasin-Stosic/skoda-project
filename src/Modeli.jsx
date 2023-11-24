import "./Modeli.css";
import Fabia from "./assets/Fabia.webp";
import Scala from "./assets/Scala.webp";
import Octavia from "./assets/Octavia.webp";
import Octavia_Combi from "./assets/Octavia-Combi.webp";
import Superb from "./assets/Superb.webp";
import Superb_Combi from "./assets/Superb-Combi.webp";
import Karoq from "./assets/Karoq.webp";
import Kamiq from "./assets/Kamiq.webp";
import Kodiaq from "./assets/Kodiaq.webp";
import arrow_small from "./assets/arrow-small.png";
function Modeli() {
  return (
    <div className="modeli">
      <h2>Svi Škoda modeli</h2>
      <ul id="lista">
        <li>
          <a href="#">Svi</a>
        </li>
        <li>
          <a href="#">Poslovni</a>
        </li>
        <li>
          <a href="#">Grad</a>
        </li>
        <li>
          <a href="#">Porodica</a>
        </li>
        <li>
          <a href="#">Outdoor</a>
        </li>
      </ul>
      <div className="slike">
        <div className="arrow-modeli" id="left">
          <img src={arrow_small} alt="" />
        </div>
        <div className="slike-inner">
          <a href="#">
            <img src={Fabia} alt="" />
            <p>Fabia</p>
          </a>
          <a href="#">
            <img src={Scala} alt="" />
            <p>Scala</p>
          </a>
          <a href="#">
            <img src={Octavia} alt="" />
            <p>Octavia</p>
          </a>
          <a href="#">
            <img src={Octavia_Combi} alt="" />
            <p>Octavia Combi</p>
          </a>
          <a href="#">
            <img src={Superb} alt="" />
            <p>Superb</p>
          </a>
          {/* <a href="#">
            <img src={Superb_Combi} alt="" />
            <p>Superb Combi</p>
          </a>
          <a href="#">
            <img src={Karoq} alt="" />
            <p>Karoq</p>
          </a>
          <a href="#">
            <img src={Kamiq} alt="" />
            <p>Kamiq</p>
          </a>
          <a href="#">
            <img src={Kodiaq} alt="" />
            <p>Kodiaq</p>
          </a> */}
        </div>
        <div className="arrow-modeli">
          <img src={arrow_small} alt="" />
        </div>
      </div>
      <button className="btn" id="modeli-btn">
        Pogledaj sve automobile
      </button>
    </div>
  );
}

export default Modeli;
