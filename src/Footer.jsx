import "./Footer.css";
import envelope from "./assets/envelope.png";
import pen from "./assets/pen.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import youtube from "./assets/youtube.png";
import app_store from "./assets/apple.svg";
import google_logo from "./assets/google.svg";

function Footer() {
  const expand = function () {
    const show = document.querySelector(".footer-b-middle");
    const btn = document.querySelector(".footer-b-top .arrow");
    if (show.classList.contains("hidden")) {
      show.classList.remove("hidden");
      btn.setAttribute("id", "rotate");
    } else {
      show.classList.add("hidden");
      btn.removeAttribute("id", "rotate");
    }
  };
  return (
    <div id="footer">
      <div className="kontakt">
        <div className="email">
          <p>Email</p>
          <img src={envelope} alt="" />
          <span>podrska@autocacak.co.rs</span>
        </div>
        <div className="kontakt-formular">
          <img src={pen} alt="" />
          <span>Kontakt formular</span>
        </div>
        <div className="drustvene-mreze">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
      <div className="linkovi">
        <div className="linkovi-left">
          <h6>Pogledajte i sledeće</h6>
          <a href="#">Škoda konfigurator</a>
          <a href="#">Škoda partneri</a>
          <a href="#">Škoda uputstva</a>
          <a href="#">Test vožnja</a>
          <a href="#">Škoda Connectivity</a>
        </div>
        <div className="aplikacija">
          <img src={app_store} alt="" />
          <img src={google_logo} alt="" />
        </div>
      </div>
      <div className="pregled">
        <div className="pregled-column">
          <h6>Pogledajte sve automobile</h6>
          <ul>
            <li>Fabia</li>
            <li>Scala</li>
            <li>Octavia</li>
            <li>Octavia Combi</li>
            <li>Superb</li>
            <li>Superb Combi</li>
            <li>Karoq</li>
            <li>Kamiq</li>
            <li>Kodiaq</li>
          </ul>
        </div>
        <div className="pregled-column">
          <h6>Ponude</h6>
          <ul>
            <li>Konfigurator automobila</li>
            <li>Test vožnja</li>
            <li>Vozila na lageru</li>
            <li>Škoda prtneri</li>
            <li>Zahtev za ponudu</li>
            <li>Ponuda za finansiranje</li>
            <li>Ponuda za flotne kupce</li>
            <li>Škoda Outdoor modeli</li>
            <li>Prezentacija automobila</li>
          </ul>
        </div>
        <div className="pregled-column">
          <h6>Škoda vozači</h6>
          <ul>
            <li>Škoda partneri</li>
            <li>Test vožnja</li>
            <li>Cenovnici i katalozi</li>
            <li>Škoda uputstva</li>
            <li>Škoda redovno održavanje</li>
            <li>Škoda ovlašćeni servisi</li>
            <li>Škoda originalna motorna ulja</li>
            <li>Škoda dodatna oprema</li>
            <li>Škoda uputstva za upotrebu</li>
            <li>Zahtev za zakazivanje servisa</li>
          </ul>
        </div>
        <div className="pregled-column">
          <ul>
            <li>Škoda Connect</li>
            <li>Škoda Connect LITE</li>
            <li>MyŠKODA App aplikacije</li>
            <li>Mobilne aplikacije</li>
            <li>Škoda pozivne kampanje</li>
            <li>Zahtev za žalbe i sugestije</li>
          </ul>
          <h6 id="emobilnost">eMobilnost</h6>
          <ul>
            <li>Konfigurator automobila</li>
            <li>Test vožnja</li>
            <li>Cenovnici i katalozi</li>
            <li>Škoda partneri</li>
            <li>eMobility</li>
          </ul>
        </div>
        <div className="pregled-column">
          <h6>Škoda svet</h6>
          <ul>
            <li>Vesti</li>
            <li>Konfigurator automobila</li>
            <li>Test vožnja</li>
            <li>Škoda partneri</li>
            <li>Škoda Brend</li>
            <li>Istorija Škode</li>
            <li>Bezbednost</li>
            <li>Bezbednost za bicikliste</li>
            <li>Sport</li>
          </ul>
        </div>
        <div className="pregled-column">
          <h6>Kontakti</h6>
          <ul>
            <li>Kontakti</li>
            <li>Škoda partneri</li>
            <li>Vozila na lageru</li>
            <li>Polovna vozila</li>
            <li>O kompaniji</li>
            <li>Kontakti</li>
            <li>Prodajno-servisna mreža</li>
            <li>Cenovnici i katalozi</li>
            <li>Škoda muzej</li>
            <li>Škoda trening centar</li>
            <li>Škdoa Magazin</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-b-top">
          <h4>Izjava o odricanju od odgovornosti</h4>
          <div className="arrow" role="button" onClick={expand}></div>
          <div className="hidden footer-b-middle">
            <p>
              Podaci i informacije na ovom sajtu služe samo kao smernice i
              nemaju obavezujući karakter. Škoda zadržava pravo da u bilo kom
              trenutku i bez najave promeni informacije na sajtu, podatke o
              automobilima, opremi, specifikacijama i dostupnosti. Način na koji
              boje izgledaju zavisi od podešavanja vašeg monitora.
              Administratori sajta rade na održavanju sajta i prikazivanju
              tačnih informacija, ali i pored toga zadržavamo pravo na bilo
              kakvu grešku. Informacije na sajtu i slike mogu se koristiti samo
              za ličnu, nekomercijalnu upotrebu. Umnožavanje ili reprodukcija
              sadržaja prikazanog na sajtu nije dozvoljena bez pismenog
              odobrenja. Prikazane informacije, slike automobila i dodatne
              opreme na sajtu su informativne i ilustrativne prirode. Za
              aktuelne informacije o Škoda vozilima, osnovnoj i dodatnoj opremi,
              trenutnim cenama, rokovima i uslovima isporuke, dostupnim uslugama
              i uslovima finansiranja kontaktirajte ovlašćenog Škoda partnera.
              Cene automobila, usluga i dodatne opreme na sajtu su prikazane u
              evrima i informativne su prirode i nisu predmet konkretne ponude
              za prodaju. Kupovina Škoda automobila i ostalih proizvoda je
              predmet uslova individualnog prodajnog ugovora. Za konačnu cenu
              vozila, usluga i dodatne opreme kontaktirajte ovlašćenog Škoda
              partnera. Plaćanje se vrši u dinarskoj protivvrednosti po srednjem
              kursu Narodne Banke Srbije za devize na dan plaćanja. Podaci o
              standardnim evropskim testovima samo su za poređenje i mogu imati
              nikakav uticaj na realne rezultate vožnje. U zavisnosti od
              izabrane veličine točkova, biće dostupne različite emisije CO2 i
              potrošnje goriva. Detaljnije informacije možete da pogledate u
              katalogu automobila i informišite se kod Škoda partnera. Imajte na
              umu da su svi sistemi pomoći u vožnji samo podrška vozaču i ne
              mogu da zamene procenu vozača o situaciji. Vozač u svakom trenutku
              mora da ima kontrolu nad vozilom i potpuno je odgovoran za
              ponašanje vozila. Za korišćenje Škoda Connect (“Usluga”) potreban
              je poseban online ugovor sa Škoda Auto, a.s. Za maksimalno
              korišćenje Usluga, kupac ima rok od 90 dana od isporuke vozila da
              se registruje na http://www.skoda-connect.com .Dostupnost Usluga
              se može razlikovati od tržišta, kao i od modela automobila, godine
              proizvodnje i opreme vozila. Usluge se mogu koristiti samo uz
              korišćenje dostupnih javnih komunikacionih tehnologija. Kada
              koristite Usluge, neophodna je konekcija između uređaja korisnika
              (pametnog telefona, tableta, računata, itd.) i servera podataka.
              Ova konekcija nije uključena u Usluge. Za dodatne informacije
              kontaktirajte Škoda dilera.
            </p>
          </div>
        </div>

        <div className="footer-b-bottom">
          <div className="copyright">
            <h6>2020 Škoda Auto a.s.</h6>
            <a href="">Lični podaci</a>
            <a href="">Politika privatnosti</a>
            <a href="">Kolačići</a>
          </div>
          <div className="lang">
            <p>SR</p>
            <p>ME</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
