<<<<<<< HEAD
import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { FaArrowUp, FaCloud } from 'react-icons/fa'; 


import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Hestia Med - Features",
  desc: "Hestia Med unterstützt Ihre Praxis mit einem umfassenden Arztpraxisinformationssystem.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Verwaltung von Patienteninformationen",
      desc: "Alle relevanten Patientendaten sind zentralisiert und einfach zugänglich.",
      icon: <EmojiHappyIcon     style={{ color: '#ae9b7f', border: "none" }} />,
    },
    {
      title: "Terminplanung",
      desc: "Optimierte Kalender- und Terminverwaltungsfunktionen für eine effiziente Planung.",
      icon: <ChartSquareBarIcon     style={{ color: '#ae9b7f' }} />,
    },
    {
      title: "Platzersparnis und Organisation",
      desc: "Es wird kein physischer Speicherplatz für Papierakten benötigt, und die Dokumente sind einfach zu kategorisieren und schnell zugänglich.",
      icon: <CursorClickIcon     style={{ color: '#ae9b7f' }} />,
    },
  ],
};

const benefitTwo = {
  title: "Technische Aspekte von Hestia - Med",
  desc: "Hestia Med nutzt moderne Technologien und Tools, um die Praxisverwaltung effizient, sicher und benutzerfreundlich zu gestalten. Mit einer robusten Architektur und flexiblen Funktionen unterstützt es Sie, Ihre Praxis optimal zu organisieren und zu digitalisieren.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Cloud-Datenbank",
      desc: "Dank der Cloud-Datenbank können alle Praxisdaten sicher gespeichert und von verschiedenen Geräten aus synchronisiert werden. Diese Lösung sorgt für eine hohe Verfügbarkeit und stellt sicher, dass Daten jederzeit und überall zugänglich sind.",
      icon: <FaCloud style={{ color: '#ae9b7f' }} />,
    },
    {
      title: "Skalierbarkeit",
      desc: "Hestia Med ist skalierbar und eignet sich für kleine Praxen genauso wie für große Kliniken, mit der Möglichkeit, mit Ihrer Praxis zu wachsen.",
      icon: <FaArrowUp style={{ color: '#ae9b7f' }}/>,
    },
    {
      title: "Powered by Next.js & TailwindCSS / CSS",
      desc: "Die Anwendung basiert auf Next.js für eine schnelle und leistungsstarke Nutzeroberfläche und TailwindCSS für ein flexibles, anpassbares Design. Diese Technologien bieten eine solide Grundlage für eine skalierbare und performante Lösung.",
      icon: <AdjustmentsIcon style={{ color: '#ae9b7f' }}/>,
    },
  ],
};

export { benefitOne, benefitTwo };
=======
version https://git-lfs.github.com/spec/v1
oid sha256:f5258c6c49178d1bb75fa2f6509323ac24b814b9ccad0ee1c78d4e89e4e893d0
size 2691
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
