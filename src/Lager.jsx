import "./Lager.css";

function Lager() {
  return (
    <div className="section">
      <h2>Trenutno dostupni Škoda automobili</h2>
      <div className="lager-wrapper">
        <p>
          Nažalost, na lageru nema na raspolaganju automobila po izabranim
          kriterijumima.
        </p>
        <button className="btn" id="lager-btn">
          Svi dostupni modeli
        </button>
      </div>
    </div>
  );
}

export default Lager;
