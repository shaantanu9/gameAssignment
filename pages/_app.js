import { Provider } from "react-redux";
import Navbar from "../components/Navbar";

import "../styles/globals.css";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
