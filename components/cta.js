<<<<<<< HEAD
import React from "react";
import Container from "./container";
import Link from "next/link";

export default function Cta() {
  return (
    <Container>
      <div 
      id="api"
      style={{ backgroundColor: '#ae9b7f' }}
      className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Probieren Sie unser APIS aus!
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Verwalten Sie Ihre Patienten effizient und erstklassig!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/register"
            target="_blank"
            rel="noopener"
            style={{
              color: '#ae9b7f',
            }}
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Testen Sie unsere Software kostenlos!
          </Link>
        </div>
      </div>
    </Container>
  );
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:3642bda55460ef18ff82d7da82a1e8c4a3484e6501794876d033717b50a1599b
size 1242
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
