<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:f5131cef0f7cb98bcaa44a48c363fff3ecd76fc6d05ad0b9ec2f99c39024cd0f
size 1264
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
