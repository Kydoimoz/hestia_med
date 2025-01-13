"use client";
import { useRouter } from "next/router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import classes from "./Layout.module.css";
import { SessionProviderWrapper } from "../../context/SessionContext";

export default function Layout({ children }) {
    const router = useRouter();
    const excludedPaths = ["/register", "/login"];
    const isExcludedPath = excludedPaths.some(path => router.pathname.startsWith(path));

    if (isExcludedPath) {
        return <>{children}</>; 
    }

    return (
        <SessionProviderWrapper>
            <div className={classes.app}>
                {/*<div className={classes.sidebar}>
                    <Sidebar />
                </div>*/}
                <div className={classes.header}>
                    <Header />
                </div>
                <main className={classes.content}>{children}</main>
            </div>
        </SessionProviderWrapper>
    );
}
