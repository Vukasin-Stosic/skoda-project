import "./Hero.css";
import Pic_1 from "./assets/Header.webp";
import Pic_2 from "./assets/Header1.webp";

function Hero() {
  return (
    <div className="hero">
      <img src={Pic_1} alt="" />
      <div className="hero-text">
        <h1>Škoda Enyaq</h1>
        <p>Cenovnik</p>
        <a href="#">
          <button>Više</button>
        </a>
      </div>
      <div className="small-pic">
        <img className="small" src={Pic_2} alt="" />
        <div className="text">
          1/5<div className="arrow"></div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
