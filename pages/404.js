import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/NotFound.module.css";
import Fuse from "fuse.js";
import Link from "next/link";
import glob from "glob"; 
const globSync = (pattern, options) => {
  return glob.sync(pattern, options); 
};

const NotFoundPage = ({ pages }) => {
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fuse = new Fuse(pages);
    const searchResults = fuse.search(router.asPath);
    setResults(searchResults.map((result) => result.item));
  }, [pages, router.asPath]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 - Error || Site not found</h1>
      <h1>Page you are trying to access could not be found</h1>
      {results?.length !== 0 && (
        <div className={styles.subTitle}>Did you mean?</div>
      )}
      <div className={styles.suggestion}>
        {results?.map((result) => (
          <Link key={result} href={result} className={styles.suggestionItem}>
          {result}
        </Link>        
        ))}
      </div>
    </div>
  );
};

// Holen von Daten zur Build-Zeit
export async function getStaticProps() {
  const pages = await new Promise((res, rej) => {
    const ignoreList = ["api", "_", "["];
    try {
      const fileList = globSync("**/*.js", { cwd: "pages" }); // Verwenden von glob.sync
      const routeList = fileList.map((item) => item.replace(".js", ""));
      const filteredRouteList = routeList.filter(
        (item) => !ignoreList.some((ignoreItem) => ignoreItem.startsWith(item))
      );
      res(filteredRouteList);
    } catch (err) {
      rej(err);
    }
  });

  return {
    props: {
      pages,
    },
  };
}

export default NotFoundPage;
