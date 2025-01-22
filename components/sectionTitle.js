<<<<<<< HEAD
import React from "react";
import Container from "./container";

export default function SectionTitle(props) {
  return (
    <Container
    style={{color: "#ae9b7f"}}
      id={props.id}
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:b5c6b368b453e8f5a61509dba636b784179a8144b86c1fdebb0e249c1d063afe
size 909
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
