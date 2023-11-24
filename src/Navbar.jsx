import "./Navbar.css";
import Logo from "./assets/logo.jpg";

function Navbar() {
  const expand = function () {
    const popup = document.querySelector(".nav-lang-hidden");
    if (popup.classList.contains("hidden")) {
      popup.classList.remove("hidden");
    } else popup.classList.add("hidden");
  };
  return (
    <div className="navbar">
      <a className="nav-logo" href="https://www.skoda-auto.rs/">
        <img src={Logo} alt="skoda logo" />
      </a>
      <div className="nav-main">
        <ul>
          <li>
            <a href="#">Automobili</a>
          </li>
          <li>
            <a href="#">Ponude</a>
          </li>
          <li>
            <a href="#">Škoda vozači</a>
          </li>
          <li>
            <a href="#">eMobilnost</a>
          </li>
          <li>
            <a href="#">Škoda svet</a>
          </li>
          <li>
            <a href="#">Kontakti</a>
          </li>
        </ul>
      </div>
      <div className="nav-lang" onClick={expand}>
        <p>sr</p>
        <div className="nav-lang-hidden hidden">
          <p>srbija(sr)</p>
          <p>crna gora(me)</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
