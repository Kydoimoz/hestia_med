<<<<<<< HEAD
import React from "react";

export default function Container(props) {
  return (
    <div
      id={props.id}
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:02c0b54aacb6a4bd7ff5ec6754e4bdca249a6b62fa15de759db55932fcac80fe
size 261
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
