import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Hestia - Med® | Bridging Technology and Care for a Healthier Tomorrow.</title>
        <meta
          name="description"
          content="created by Hestia - Med"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        id="features"
        pretitle="Vorteile von Hestia - Med"
        title="Warum Sie Hestia - Med verwenden sollten">
        Hestia - Med bietet im Vergleich zu anderen Praxismanagement-Systemen eine einzigartige Kombination aus Benutzerfreundlichkeit, Sicherheit und Flexibilität. Es wurde speziell für Allgemeinmediziner und niedergelassene Ärzte entwickelt, sodass es perfekt auf die Bedürfnisse kleiner und mittlerer Praxen abgestimmt ist.

Die Cloud-basierte Architektur sorgt für eine sichere und jederzeit zugängliche Datenbank, die eine nahtlose Synchronisation zwischen verschiedenen Geräten ermöglicht. Dadurch können Ärzte und Praxismanager jederzeit und von jedem Ort auf ihre Daten zugreifen.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        id="tutorial"
        pretitle="Hestia - Med Arztpraxisinformationssystem"
        title="Learn about Hestia Med">
       
      </SectionTitle>
      <Video />
      <SectionTitle
        id="testimonials"
        pretitle="Kundenmeinungen"
        title="Hier ist, was unsere Kunden sagen">
      </SectionTitle>
      <Testimonials />
      <SectionTitle id="faq" pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
