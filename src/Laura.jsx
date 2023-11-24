import Laura_pic from "./assets/laura.png";
import Cookie from "./assets/cookie.svg";
import Cookie_green from "./assets/cookie-green.svg";
import dots from "./assets/dots.png";
import arrow from "./assets/arrow.png";
import "./Laura.css";

function Laura() {
  const cookieOver = function () {
    const show = document.querySelector("#hidden");
    show.classList.remove("hidden");
    show.classList.add("hover");
    // const hidde = document.querySelector("#cookie");
    // hidde.classList.add("hidden");
  };
  const cookieOut = function () {
    const hidde = document.querySelector("#hidden");
    hidde.classList.remove("hover");
    hidde.classList.add("hidden");
    // const show = document.querySelector("#cookie");
    // show.classList.remove("hidden");
  };
  const minimize = function () {
    const hidde = document.querySelector("#l-p-one");
    hidde.classList.add("hidden");
    const btn = document.querySelector("#l-btn");
    btn.classList.add("hidden");
    const show = document.querySelector("#l-p-two");
    show.classList.remove("hidden");
    const div = document.querySelector(".laura-div");
    div.setAttribute("id", "l-shown");
  };
  return (
    <div>
      <a href="#" className="cookie" id="cookie" onMouseOver={cookieOver}>
        <img src={Cookie} alt="" />
      </a>
      <a href="#" className="cookie hidden" id="hidden" onMouseOut={cookieOut}>
        <img src={Cookie_green} alt="" />
        <p>UPRAVLJAJTE KOLAČIĆIMA</p>
      </a>
      <a href="#" className="to-top hidden">
        <img src={arrow} alt="" />
      </a>
      <div className="laura-div">
        <img src={Laura_pic} alt="" />
        <div id="laura-inner">
          <h4>Pitajte Lauru</h4>
          <p id="l-p-one">
            Da li želite da razgovarate sa našom digitalnom asistentkinjom?
            Otkrijte u čemu vam Laura može pomoći!
          </p>
          <p id="l-p-two" className="hidden">
            Dostupna sam 24 sata dnevno
          </p>
          <button onClick={minimize} id="l-btn">
            &#10005;
          </button>
          <span id="minimize">minimize</span>
        </div>
        <div className="arrow" id="laura-arrow"></div>
      </div>
      <div className="homepage hidden">
        <span>homepage</span>
        <button className="btn" id="konfig">
          Konfigurator automobila
        </button>
        <button className="btn" id="test">
          Test vožnja
        </button>
        <button className="btn" id="dots">
          <img src={dots} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Laura;
