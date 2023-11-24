import "./Vesti.css";

function Vesti() {
  return (
    <div className="section">
      <h2>Najnovije vesti</h2>
      <div className="vesti-wrapper">
        <div className="vesti-singl">
          <div className="vesti">
            <a href="#">
              <h3>Predstavljen novi Škoda Kodiaq!</h3>
            </a>
            <div className="flex">
              <p className="date">17. oktobar 2023.</p>
              <p className="flex-text">
                Novi izgled, nova tehnologij. Novi Škoda Kodiaq ima više
                prostora, vrhunske mogu...
              </p>
              <a className="vise" href="#">
                <div>
                  <span className="vise-span">Više</span>
                  <div className="arrow"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="vesti-singl">
          <div className="vesti">
            <a href="#">
              <h3>Upoznajte nove verzije modela Scala i Kamiq</h3>
            </a>
            <div className="flex">
              <p className="date">23. avgust 2023</p>
              <p className="flex-text">
                Predstavljene su nove verzije inovativno kompaktnog model Škoda
                Scala i urbanog...
              </p>
              <a className="vise" href="#">
                <div>
                  <span className="vise-span">Više</span>
                  <div className="arrow"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="vesti-singl">
          <div className="vesti">
            <a href="#">
              <h3>Šta će da ponudi novi Superb?</h3>
            </a>
            <div className="flex">
              <p className="date">12. avgust 2023</p>
              <p className="flex-text">
                Nova generacija će uskoro započeti novo poglavlje u priči o
                uspehu modela Škoda S...
              </p>
              <a className="vise" href="#">
                <div>
                  <span className="vise-span">Više</span>
                  <div className="arrow"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="vesti-singl">
          <div className="vesti" id="vesti-last">
            <a href="#">
              <h3>Upoznajte novu generaciju modela Kodiaq</h3>
            </a>
            <div className="flex">
              <p className="date">12. jul 2023</p>
              <p className="flex-text">
                Nova generacija modela Škoda Kodiaq predstavljena sa
                upečatljivom kamuflažom i ...
              </p>
              <a className="vise" href="#">
                <div>
                  <span className="vise-span">Više</span>
                  <div className="arrow"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="btn" id="vesti-btn">
        Sve vesti
      </button>
    </div>
  );
}

export default Vesti;
