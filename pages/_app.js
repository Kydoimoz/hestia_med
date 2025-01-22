<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:7ea2f7ebf436321bf5ee29beac692a0c73d0d997e94004f8f43d30fe79b5b0d0
size 479
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
