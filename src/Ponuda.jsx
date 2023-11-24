import "./Ponuda.css";
import ponudaData from "./ponudaData";

function Ponuda() {
  const Tile = function (props) {
    return (
      <a href="#" className={`g-single ${props.type}`} id={props.ids}>
        <div className="g-text">
          <h4>{props.title}</h4>
          <p>{props.text}</p>
        </div>
      </a>
    );
  };
  const tileElemens = ponudaData.map((tile) => {
    return <Tile key={tile.id} {...tile} />;
  });
  return (
    <div className="section">
      <h2>Otkrijte specijalne ponude</h2>
      <div className="grid">{tileElemens}</div>
    </div>
  );
}

export default Ponuda;
