import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
const RemoteTopBar = dynamic(() => import('productsRemote/Topbar'), { ssr: false });
const RemoteNavbar = dynamic(() => import('productsRemote/Navbar'), { ssr: false });
const RemoteFooter = dynamic(() => import('productsRemote/Footer'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="topbar" style={{ minHeight: '7vh' }}>
        <RemoteTopBar />
      </div>
      <div style={{ minHeight: '5vh' }}>
        <RemoteNavbar />
      </div>
      <div style={{padding: '20px' }}>
      <Component {...pageProps} />
      </div>
      <RemoteFooter />
    </>
  );

}
