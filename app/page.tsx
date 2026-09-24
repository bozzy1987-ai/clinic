import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, Phone, Sparkles } from 'lucide-react';
import TreatmentPhoto from './TreatmentPhoto';

const booksy = 'https://booksy.com/pl-pl/99158_ec-clinic-edyta-cichor_salon-kosmetyczny_12514_zawiercie';
const phone = 'tel:+48605650311';
const maps = 'https://www.google.com/maps/search/?api=1&query=EC+CLINIC+Edyta+Cichor+Obro%C5%84c%C3%B3w+Poczty+Gda%C5%84skiej+20D+Zawiercie';

const services = [
  { number: '01', name: 'Kosmetologia twarzy', detail: 'Pielęgnacja dobrana do potrzeb skóry, zabiegi autorskie i konsultacje.', anchor: 'twarz' },
  { number: '02', name: 'Podologia', detail: 'Konsultacja i zabiegi pielęgnacyjne stóp oraz paznokci.', anchor: 'podologia' },
  { number: '03', name: 'Depilacja laserowa', detail: 'Zabiegi dla różnych partii ciała. Dobór zakresu podczas konsultacji.', anchor: 'depilacja' },
  { number: '04', name: 'Zabiegi na ciało i EMS', detail: 'Pielęgnacja ciała, modelowanie sylwetki i EMS.', anchor: 'cialo' },
];

type Treatment = {
  id: string;
  name: string;
  image: string;
  alt: string;
  text: string;
  examples: string[];
  photo?: { src: string; alt: string; title: string; note: string; buttonText: string };
};

const treatments: Treatment[] = [
  { id: 'twarz', name: 'Kosmetologia twarzy', image: '/services/facial.jpg', alt: 'Ilustracyjne zdjęcie zabiegu pielęgnacyjnego twarzy', text: 'Pielęgnacja twarzy dobierana do kondycji skóry podczas konsultacji. Kliknij zdjęcie, aby zobaczyć fotografię z gabinetu EC CLINIC.', examples: ['Frizmi — zabieg na twarz', 'Oczyszczanie wodorowe', 'Autorski zabieg EC CLINIC'], photo: { src: '/booksy/facial.jpg', alt: 'Zabieg pielęgnacyjny twarzy w gabinecie EC CLINIC', title: 'Kosmetologia twarzy', note: 'Zdjęcie zabiegu z portfolio EC CLINIC opublikowanego w Booksy.', buttonText: 'Zobacz zdjęcie EC CLINIC' } },
  { id: 'podologia', name: 'Podologia', image: '/services/podology.jpg', alt: 'Ilustracyjne zdjęcie zabiegu pielęgnacyjnego stopy', text: 'Pielęgnacja skóry i paznokci stóp oraz zabiegi związane z konkretnymi dolegliwościami. Kliknij zdjęcie, aby zobaczyć przykład przed i po z portfolio EC CLINIC.', examples: ['Pierwsza wizyta podologiczna', 'Kompleksowy zabieg podologiczny', 'Zabieg pielęgnacyjny na stopy'], photo: { src: '/booksy/podology.jpg', alt: 'Zestawienie zdjęć stopy przed zabiegiem podologicznym i po nim, opublikowane przez EC CLINIC w Booksy', title: 'Podologia: przed i po', note: 'Przykład opublikowany przez EC CLINIC w Booksy. Efekt zabiegu zależy od indywidualnych warunków.', buttonText: 'Zobacz zdjęcia przed i po' } },
  { id: 'depilacja', name: 'Depilacja laserowa', image: '/services/hair-removal.jpg', alt: 'Ilustracyjne zdjęcie depilacji laserowej', text: 'Zabiegi obejmują różne partie twarzy i ciała. Kliknij zdjęcie, aby zobaczyć przykład z portfolio EC CLINIC.', examples: ['Depilacja laserowa pach', 'Depilacja laserowa łydek i nóg', 'Depilacja laserowa twarzy'], photo: { src: '/booksy/laser-hair.jpg', alt: 'Zestawienie przed i po depilacji laserowej opublikowane przez EC CLINIC', title: 'Depilacja laserowa: przed i po', note: 'Przykład opublikowany przez EC CLINIC w Booksy. Efekt zabiegu zależy od indywidualnych warunków.', buttonText: 'Zobacz zdjęcia przed i po' } },
  { id: 'cialo', name: 'Zabiegi na ciało i EMS', image: '/services/body.jpg', alt: 'Ilustracyjne zdjęcie zabiegu pielęgnacyjnego ciała', text: 'Oferta na ciało obejmuje EMS oraz zabiegi pielęgnacyjne i modelujące. Kliknij zdjęcie, aby zobaczyć EMS w gabinecie EC CLINIC.', examples: ['EMS — fitness na leżąco', 'Peeling ciała', 'Liposukcja kawitacyjna i body wrapping'], photo: { src: '/booksy/ems.jpg', alt: 'Osoba podczas zabiegu EMS w gabinecie EC CLINIC', title: 'EMS w EC CLINIC', note: 'Zdjęcie zabiegu EMS z portfolio EC CLINIC opublikowanego w Booksy.', buttonText: 'Zobacz zdjęcie EC CLINIC' } },
  { id: 'trychologia', name: 'Trychologia', image: '/services/trichology.jpg', alt: 'Ilustracyjne zdjęcie masażu skóry głowy', text: 'Konsultacja i zabiegi skóry głowy. Zakres pielęgnacji jest dobierany indywidualnie.', examples: ['Konsultacja trychologiczna', 'Peeling skóry głowy', 'Masaż skóry głowy'] },
  { id: 'laseroterapia', name: 'Laseroterapia', image: '/services/laser-therapy.jpg', alt: 'Ilustracyjne zdjęcie zabiegu laserowego na twarzy', text: 'Zabiegi laserowe dotyczące wyglądu skóry twarzy i wybranych zmian. Szczegóły omówisz podczas konsultacji.', examples: ['Fotoodmładzanie', 'Zamykanie naczynek', 'Laserowe usuwanie rumienia'] },
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
            <Image src="/booksy/portrait.jpg" alt="Zdjęcie profilowe EC CLINIC z Booksy" fill sizes="(max-width: 800px) 100vw, 50vw" priority unoptimized style={{ objectFit: 'contain', objectPosition: 'center' }} />
            <span className="image-label">ZDJĘCIE Z PROFILU EC CLINIC W BOOKSY</span>
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
          <div className="treatments-heading"><div><span className="eyebrow">ZOBACZ Z BLISKA</span><h3>Wybierz swoją <em>ścieżkę pielęgnacji.</em></h3></div><p>Przy zabiegach ze zdjęciami w portfolio kliknij ilustrację, aby obejrzeć fotografie EC CLINIC z Booksy.</p></div>
          <div className="treatment-grid">
            {treatments.map((treatment, index) => <article className="treatment-card" id={treatment.id} key={treatment.id}>
              {treatment.photo ? <TreatmentPhoto id={treatment.id} name={treatment.name} preview={treatment.image} previewAlt={treatment.alt} photo={treatment.photo.src} photoAlt={treatment.photo.alt} photoTitle={treatment.photo.title} photoNote={treatment.photo.note} buttonText={treatment.photo.buttonText} /> : <div className="treatment-photo"><Image src={treatment.image} alt={treatment.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" unoptimized /></div>}
              <div className="treatment-copy"><div className="treatment-meta"><span className="treatment-index">{String(index + 1).padStart(2, '0')} / 06</span><span>ZDJĘCIE ILUSTRACYJNE</span></div><h4>{treatment.name}</h4><p>{treatment.text}</p><div className="treatment-examples"><strong>W ofercie m.in.</strong><ul>{treatment.examples.map((example) => <li key={example}>{example}</li>)}</ul></div><a href={booksy} target="_blank" rel="noopener noreferrer">Sprawdź usługi w Booksy <ArrowUpRight size={17} aria-hidden="true" /></a></div>
            </article>)}
          </div>
          <p className="service-note">Zdjęcia na kartach są ilustracyjne. Po kliknięciu kart twarzy, podologii, depilacji i EMS zobaczysz fotografie EC CLINIC z Booksy. Dla trychologii i laseroterapii nie ma tu potwierdzonych zdjęć konkretnych zabiegów. Pełna oferta, ceny i terminy są dostępne w Booksy.</p>
        </section>

        <section className="about" id="o-nas" aria-labelledby="about-title">
          <div className="about-photo"><Image src="/booksy/room.jpg" alt="Wnętrze gabinetu EC CLINIC w Zawierciu" fill sizes="(max-width: 800px) 100vw, 42vw" unoptimized /><span>WNĘTRZE EC CLINIC · ZDJĘCIE Z BOOKSY</span></div>
          <div className="about-main"><span className="eyebrow">02 / O EC CLINIC</span><h2 id="about-title">Za każdym zabiegiem stoi <em>rozmowa.</em></h2><p>W ofercie EC CLINIC Edyty Cichor znajdziesz kosmetologię, podologię, trychologię, zabiegi laserowe i pielęgnację ciała. Profil kliniki w Booksy opisuje 25 lat doświadczenia oraz indywidualny dobór zabiegów. Zobacz prawdziwe wnętrze gabinetu i przykłady pracy.</p><a href={booksy} target="_blank" rel="noopener noreferrer" className="about-link">Sprawdź usługi i dostępność <ArrowRight size={19} aria-hidden="true" /></a></div>
        </section>

        <section className="visit section-pad" id="kontakt" aria-labelledby="visit-title">
          <div className="visit-copy"><span className="eyebrow">03 / ZAPRASZAMY</span><h2 id="visit-title">Do zobaczenia<br /><em>w EC CLINIC.</em></h2><p>Wybierz wygodny termin online albo zadzwoń, jeśli chcesz zapytać o usługę przed wizytą.</p><a className="button button-dark" href={booksy} target="_blank" rel="noopener noreferrer">Zarezerwuj w Booksy <ArrowUpRight size={18} aria-hidden="true" /></a></div>
          <div className="visit-details"><div className="visit-exterior"><Image src="/booksy/exterior.jpg" alt="Budynek, w którym mieści się EC CLINIC" fill sizes="(max-width: 800px) 100vw, 45vw" unoptimized /><span>LOKAL EC CLINIC · ZDJĘCIE Z BOOKSY</span></div><div><MapPin aria-hidden="true" /><span><strong>Adres</strong>ul. Obrońców Poczty Gdańskiej 20D<br />42-400 Zawiercie<a href={maps} target="_blank" rel="noopener noreferrer">Pokaż trasę ↗</a></span></div><div><Phone aria-hidden="true" /><span><strong>Telefon</strong><a className="phone-link" href={phone}>+48 605 650 311</a></span></div></div>
        </section>
      </main>
      <footer><a className="footer-brand" href="#top">EC CLINIC <span>EDYTA CICHOR</span></a><span>Projekt demonstracyjny · 2026</span><a href={booksy} target="_blank" rel="noopener noreferrer">Booksy ↗</a></footer>
    </>
  );
}
