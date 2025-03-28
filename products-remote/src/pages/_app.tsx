import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { store } from '../container/redux/store';
import Navbar from "@/container/layout/Navbar";
import Footer from "@/container/layout/Footer";
import TopBar from "@/container/layout/Topbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="topbar" style={{  minHeight: '4vh'}}>
        <TopBar />
      </div>
      <div style={{  minHeight: '5vh' }}>
        <Navbar />
      </div>
      <div style={{padding: '20px',paddingTop:'60px' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>

  )
}
