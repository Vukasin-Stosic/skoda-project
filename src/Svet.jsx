import "./Svet.css";
import svetData from "./svetData";

function Svet() {
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
  const tileElemens = svetData.map((tile) => {
    return <Tile key={tile.id} {...tile} />;
  });
  return (
    <div className="section">
      <h2>Škoda svet</h2>
      <div className="grid">{tileElemens}</div>
    </div>
  );
}

export default Svet;
