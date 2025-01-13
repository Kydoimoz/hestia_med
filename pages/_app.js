
import "./../styles/global.css"
import "./../styles/calendar.css"
import Layout from "../components/ui/Layout";
import AuthProviders from "./Providers";

export default function HestiaMed({ Component, pageProps }) {
  return (
  <AuthProviders>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </AuthProviders>
  );
}
