import Navbar from "./Navbar";
import Hero from "./Hero";
import Modeli from "./Modeli";
import Vesti from "./Vesti";
import Promocije from "./Promocije";
import Laura from "./Laura";
import Ponuda from "./Ponuda";
import Svet from "./Svet";
import Lager from "./Lager";
import Footer from "./Footer";

function App() {
  let prevScrollPos = window.scrollY;

  window.addEventListener("scroll", function () {
    const homepage = this.document.querySelector(".homepage");
    const currentScrollPos = this.window.scrollY;
    const to_top = this.document.querySelector(".to-top");
    const nav = this.document.querySelector(".navbar");

    nav.classList.toggle("hidden", window.scrollY > 580);

    // if (prevScrollPos > currentScrollPos) {
    //   nav.classList.remove("hidden");
    // }
    prevScrollPos = currentScrollPos;

    homepage.classList.toggle("hidden", window.scrollY < 580);

    to_top.classList.toggle("hidden", window.scrollY < 580);
  });
  return (
    <>
      <Navbar />
      <Laura />
      <Hero />
      <Modeli />
      <Vesti />
      <Promocije />
      <Ponuda />
      <Lager />
      <Svet />
      <Footer />
    </>
  );
}

export default App;
