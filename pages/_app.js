import "./../styles/global.css";
import "./../styles/calendar.css";
import Layout from "../components/ui/Layout";
import AuthProviders from "./Providers";
import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

export default function HestiaMed({ Component, pageProps }) {
  return (
  <AuthProviders>
  <Layout>
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
  </Layout>
  </AuthProviders>
  );
}
