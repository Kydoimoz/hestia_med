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
import Appointments from "../components/pages/appointments";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

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

      <Appointments />
    </>
  );
}
