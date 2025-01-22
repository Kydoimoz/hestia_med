import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Ist Hestia Med für meine Praxis geeignet?",
    answer: "Ja, Hestia Med wurde speziell für Allgemeinärzte und niedergelassene Ärzte entwickelt. Es bietet eine benutzerfreundliche und effiziente Lösung für die Praxisverwaltung.",
  },
  {
    question: "Kann ich meine Patientendaten mit Hestia Med sicher speichern?",
    answer: "Ja, Hestia Med nutzt eine Cloud-Datenbank, die sicherstellt, dass Ihre Patientendaten jederzeit und von verschiedenen Geräten aus zugänglich sind, während sie gleichzeitig den höchsten Sicherheitsstandards entspricht.",
  },
  {
    question: "Bietet Hestia Med Unterstützung für die Terminplanung?",
    answer: "Ja, Hestia Med verfügt über ein leistungsstarkes Terminplanungssystem, das Ihnen hilft, Ihre Sprechstunden effizient zu verwalten und Doppelbuchungen zu vermeiden.",
  },
  {
    question: "Kann ich Hestia Med auch für die Verwaltung von Rezepten und Überweisungen nutzen?",
    answer: "Ja, Hestia Med ermöglicht die digitale Verwaltung von Rezepten, Überweisungen und anderen administrativen Aufgaben, sodass Sie diese Prozesse schneller und effizienter gestalten können.",
  },
  {
    question: "Gibt es eine Möglichkeit, Unterstützung bei der Nutzung von Hestia Med zu erhalten?",
    answer: "Ja, wir bieten ein Support-Paket an, das Ihnen 6 Monate technische Unterstützung und Beratung zu Fragen rund um die Nutzung von Hestia Med bietet.",
  },
  {
    question: "Ist Hestia Med mit den Datenschutzbestimmungen für Ärzte kompatibel?",
    answer: "Ja, Hestia Med entspricht den geltenden Datenschutzvorschriften wie der DSGVO, sodass die Daten Ihrer Patienten immer sicher und datenschutzkonform behandelt werden.",
  },
];
