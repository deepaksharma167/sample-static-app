import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import "../styles/main.scss";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <footer id="main-footer">Copyright &copy; 2025</footer>
    </>
  );
}
