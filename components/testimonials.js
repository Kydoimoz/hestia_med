<<<<<<< HEAD
import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/zeppel.png";
import userTwoImg from "../public/img/divi.png";
import userThreeImg from "../public/img/livia.png";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              <Mark style={{color: "#ae9b7f"}}>Hestia Med hat unsere Praxis revolutioniert.</Mark>
              Die einfache Verwaltung von Patientendaten, die übersichtliche Terminplanung und die nahtlose Integration von Cloud-Daten machen den Alltag so viel effizienter.
            </p>

            <Avatar
              image={userOneImg}
              name="Zeppelzauer Wolfgang"
              title="Medizintechniker"
              fill
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Die benutzerfreundliche Oberfläche ermöglicht es unserem Team, sich auf das Wesentliche zu konzentrieren – die Patienten. 
              Wir können es jedem Kollegen nur empfehlen!“
            </p>
            <Avatar
              image={userTwoImg}
              name="Divjak Peter"
              title="Arzt - Klinik Donaustadt"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
                Seitdem wir Hestia Med in unserer Praxis nutzen, hat sich der Arbeitsalltag erheblich verbessert.
                Die Software ist nicht nur einfach zu bedienen, sondern hilft uns auch, unsere Patienten effizienter zu betreuen. 
            </p>
            <Avatar
              image={userThreeImg}
              name="Livia Arslan"
              title="Ärztin - Klinik"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center relative mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden relative rounded-full w-14 h-14">
        <Image
          src={props.image}
          alt="Avatar"
          layout="fill"
          placeholder="blur"
          
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark
  style={{ color: "#685d4e" }}
  className="bg-customGold text-[#4f453a] rounded-sm px-1 py-0.5">
  {props.children}
</mark>{" "}

    </>
  );
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:5a162994478e72b0da59d3031fa23df753a90fd312f076aa7fc86c0c66feb4b8
size 3142
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
