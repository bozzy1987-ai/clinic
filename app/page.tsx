import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, Phone, Sparkles } from 'lucide-react';

const booksy = 'https://booksy.com/pl-pl/99158_ec-clinic-edyta-cichor_salon-kosmetyczny_12514_zawiercie';
const phone = 'tel:+48605650311';
const maps = 'https://www.google.com/maps/search/?api=1&query=EC+CLINIC+Edyta+Cichor+Obro%C5%84c%C3%B3w+Poczty+Gda%C5%84skiej+20D+Zawiercie';

const services = [
  { number: '01', name: 'Kosmetologia twarzy', detail: 'Pielęgnacja dobrana do potrzeb skóry, zabiegi autorskie i konsultacje.', anchor: 'twarz' },
  { number: '02', name: 'Podologia', detail: 'Konsultacja i zabiegi pielęgnacyjne stóp oraz paznokci.', anchor: 'podologia' },
  { number: '03', name: 'Depilacja laserowa', detail: 'Zabiegi dla różnych partii ciała. Dobór zakresu podczas konsultacji.', anchor: 'depilacja' },
  { number: '04', name: 'Zabiegi na ciało', detail: 'Oferta zabiegów pielęgnacyjnych i modelujących sylwetkę.', anchor: 'cialo' },
];

const treatments = [
  { id: 'twarz', name: 'Kosmetologia twarzy', image: '/services/facial.jpg', alt: 'Kosmetolożka nakłada preparat na twarz klientki', text: 'Zabiegi autorskie, oczyszczanie i pielęgnacja dopasowana do kondycji skóry. Jeśli nie wiesz, od czego zacząć, wybierz konsultację kosmetologiczną.' },
  { id: 'podologia', name: 'Podologia', image: '/services/podology.jpg', alt: 'Specjalistka w rękawiczkach wykonuje zabieg pielęgnacyjny stopy', text: 'Pierwsza wizyta podologiczna, pielęgnacja stóp i paznokci oraz zabiegi związane z konkretnymi dolegliwościami. Zakres wizyty ustalany jest indywidualnie.' },
  { id: 'depilacja', name: 'Depilacja laserowa', image: '/services/hair-removal.jpg', alt: 'Głowica urządzenia używana podczas zabiegu depilacji laserowej nogi', text: 'Zabiegi na wybrane partie twarzy i ciała. W Booksy znajdziesz dostępne obszary, pojedyncze wizyty i pakiety.' },
  { id: 'cialo', name: 'Zabiegi na ciało', image: '/services/body.jpg', alt: 'Terapeutka wykonuje masaż pleców', text: 'Peelingi, zabiegi pielęgnacyjne i modelujące oraz masaże. Wybierz rodzaj wizyty zgodnie z tym, czego potrzebujesz teraz.' },
  { id: 'trychologia', name: 'Trychologia', image: '/services/trichology.jpg', alt: 'Masaż skóry głowy podczas zabiegu pielęgnacyjnego', text: 'Konsultacja, oczyszczanie skóry głowy, peeling i masaż. W ofercie jest także autorski zabieg trychologiczny EC CLINIC.' },
  { id: 'laseroterapia', name: 'Laseroterapia', image: '/services/laser-therapy.jpg', alt: 'Zabieg na skórę twarzy z użyciem urządzenia laserowego', text: 'W tej kategorii dostępne są m.in. fotoodmładzanie oraz zabiegi dotyczące naczynek i rumienia. Szczegóły omówisz podczas konsultacji.' },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Przejdź do treści</a>
      <div className="demo-note">Koncepcja strony EC CLINIC · projekt demonstracyjny</div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="EC Clinic — początek strony"><span>EC</span><span>CLINIC<small>EDYTA CICHOR</small></span></a>
        <nav aria-label="Nawigacja główna">
          <a href="#oferta">Oferta</a><a href="#o-nas">O nas</a><a href="#kontakt">Kontakt</a>
        </nav>
        <a className="header-cta" href={booksy} target="_blank" rel="noopener noreferrer">Umów wizytę <ArrowUpRight size={17} aria-hidden="true" /></a>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-intro"><span className="line" /> ZAWIERCIE · KOSMETOLOGIA I PODOLOGIA</div>
            <h1 id="hero-title">Piękno zaczyna się od <em>uważności.</em></h1>
            <p>Poznaj zabiegi dopasowane do Twoich potrzeb. Zadbaj o skórę, ciało i komfort w miejscu, w którym możesz poczuć się swobodnie.</p>
            <div className="hero-actions">
              <a className="button button-dark" href={booksy} target="_blank" rel="noopener noreferrer">Umów wizytę w Booksy <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="text-link" href="#oferta">Poznaj ofertę <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <div className="hero-foot"><span>01 / INDYWIDUALNE PODEJŚCIE</span><span>EC CLINIC · ZAWIERCIE</span></div>
          </div>
          <div className="hero-image">
            <Image src="/clinic-hero.png" alt="Ilustracyjny portret kobiety na neutralnym tle" fill sizes="(max-width: 800px) 100vw, 50vw" priority unoptimized />
            <span className="image-label">ZDJĘCIE ILUSTRACYJNE</span>
          </div>
        </section>

        <section className="intro-strip" aria-label="W skrócie">
          <p>Wybierz to, czego potrzebujesz. <em>Resztę ustalimy razem.</em></p>
          <span><Sparkles size={18} aria-hidden="true" /> ZABIEGI TWARZY · PODOLOGIA · LASER</span>
        </section>

        <section className="services section-pad" id="oferta" aria-labelledby="services-title">
          <div className="section-heading"><div><span className="eyebrow">01 / OFERTA</span><h2 id="services-title">Twoje potrzeby.<br /><em>Nasza uwaga.</em></h2></div><p>Od pierwszej konsultacji po regularną pielęgnację. Sprawdź główne obszary oferty i wybierz termin w Booksy.</p></div>
          <div className="service-grid">
            {services.map((service) => <a key={service.number} className="service-card" href={`#${service.anchor}`} aria-label={`${service.name} — poznaj zabiegi`}><span className="service-number">{service.number} / 04</span><div className="service-bottom"><h3>{service.name}</h3><p>{service.detail}</p><span className="service-link">Poznaj zabiegi <ArrowDown size={18} aria-hidden="true" /></span></div></a>)}
          </div>
          <div className="treatments-heading"><div><span className="eyebrow">ZOBACZ Z BLISKA</span><h3>Wybierz swoją <em>ścieżkę pielęgnacji.</em></h3></div><p>Sześć obszarów oferty, od pielęgnacji twarzy po zabiegi skóry głowy. Każdy prowadzi do aktualnej listy terminów.</p></div>
          <div className="treatment-grid">
            {treatments.map((treatment, index) => <article className="treatment-card" id={treatment.id} key={treatment.id}>
              <div className="treatment-photo"><Image src={treatment.image} alt={treatment.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" unoptimized /></div>
              <div className="treatment-copy"><span className="treatment-index">{String(index + 1).padStart(2, '0')} / 06</span><h4>{treatment.name}</h4><p>{treatment.text}</p><a href={booksy} target="_blank" rel="noopener noreferrer">Sprawdź usługi w Booksy <ArrowUpRight size={17} aria-hidden="true" /></a></div>
            </article>)}
          </div>
          <p className="service-note">Zdjęcia zabiegów są ilustracyjne i nie przedstawiają EC CLINIC. Pełna oferta, ceny i wolne terminy są dostępne w Booksy.</p>
        </section>

        <section className="about" id="o-nas" aria-labelledby="about-title">
          <div className="about-side"><span>EC</span><span>EST. ZAWIERCIE</span></div>
          <div className="about-main"><span className="eyebrow">02 / O EC CLINIC</span><h2 id="about-title">Za każdym zabiegiem stoi <em>rozmowa.</em></h2><p>W ofercie EC CLINIC Edyty Cichor znajdziesz kosmetologię, podologię, trychologię, zabiegi laserowe i pielęgnację ciała. To przestrzeń dla osób, które chcą świadomie wybrać pielęgnację i wiedzieć, czego mogą oczekiwać od wizyty.</p><a href={booksy} target="_blank" rel="noopener noreferrer" className="about-link">Sprawdź usługi i dostępność <ArrowRight size={19} aria-hidden="true" /></a></div>
        </section>

        <section className="visit section-pad" id="kontakt" aria-labelledby="visit-title">
          <div className="visit-copy"><span className="eyebrow">03 / ZAPRASZAMY</span><h2 id="visit-title">Do zobaczenia<br /><em>w EC CLINIC.</em></h2><p>Wybierz wygodny termin online albo zadzwoń, jeśli chcesz zapytać o usługę przed wizytą.</p><a className="button button-dark" href={booksy} target="_blank" rel="noopener noreferrer">Zarezerwuj w Booksy <ArrowUpRight size={18} aria-hidden="true" /></a></div>
          <div className="visit-details"><div><MapPin aria-hidden="true" /><span><strong>Adres</strong>ul. Obrońców Poczty Gdańskiej 20D<br />42-400 Zawiercie<a href={maps} target="_blank" rel="noopener noreferrer">Pokaż trasę ↗</a></span></div><div><Phone aria-hidden="true" /><span><strong>Telefon</strong><a className="phone-link" href={phone}>+48 605 650 311</a></span></div></div>
        </section>
      </main>
      <footer><a className="footer-brand" href="#top">EC CLINIC <span>EDYTA CICHOR</span></a><span>Projekt demonstracyjny · 2026</span><a href={booksy} target="_blank" rel="noopener noreferrer">Booksy ↗</a></footer>
    </>
  );
}
