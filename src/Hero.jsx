import "./Hero.css";
import Pic_1 from "./assets/Header.webp";
import Pic_2 from "./assets/Header1.webp";

function Hero() {
  const Tile = function (props) {
    <div className="hero-tile">
      <img src={props.img} alt="" />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href="#">
          <button>{props.btntext}</button>
        </a>
      </div>
      <div className="small-pic">
        <img className="small" src={props.imgsm} alt="" />
        <div className="text">
          {props.id}/5<div className="arrow"></div>
        </div>
      </div>
    </div>;
  };
  const tileElemens = heroData.map((tile) => {
    return <Tile />;
  });
  return <div className="hero">{tileElemens}</div>;
}
export default Hero;
