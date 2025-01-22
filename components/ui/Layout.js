
"use client";
import { useRouter } from "next/router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import classes from "./Layout.module.css";
import { SessionProviderWrapper } from "../../context/SessionContext";

export default function Layout({ children }) {
    const router = useRouter();
    const excludedPaths = ["/register", "/login", "/terms", "/privacy"];
    const isHomepage = router.pathname === "/";  // Überprüft, ob der Benutzer auf der Homepage ist.
    const isExcludedPath = excludedPaths.some(path => router.pathname.startsWith(path));

    if (isHomepage || isExcludedPath) {
        return <>{children}</>;  // Kein Layout für die Homepage oder Ausschluss-Pfade.
    }

    return (
        <SessionProviderWrapper>
            <div className={classes.app}>
                {/* Optional Sidebar, falls du sie später verwenden möchtest */}
                {/* <div className={classes.sidebar}>
                    <Sidebar />
                </div> */}
                <div className={classes.header}>
                    <Header />
                </div>
                <main className={classes.content}>{children}</main>
            </div>
        </SessionProviderWrapper>
    );
}