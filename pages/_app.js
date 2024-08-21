import Footer from "../components/Footer";
import "../styles/globals.css";
import Navbar from "./../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className=" mx-auto text-black">
        <div className="z-50 sticky top-0 bg-white">
          <Navbar />
        </div>
        <div className="z-0">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
