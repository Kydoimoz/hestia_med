<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:c23f0ff7a344d8a8b39ca81937e8af6dd96a736a2d4613054e57427225418cd8
size 1382
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
