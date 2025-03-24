import store, { persistor, RootState } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const RemoteTopBar = dynamic(() => import('productsRemote/Topbar'), { ssr: false });
const RemoteNavbar = dynamic(() => import('productsRemote/Navbar'), { ssr: false });
const RemoteFooter = dynamic(() => import('productsRemote/Footer'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <ReduxWrapper Component={Component} pageProps={pageProps} />
      </PersistGate>
    </Provider>
  );
}

function ReduxWrapper({ Component, pageProps }: AppProps) {
  const selectedProducts = useSelector((state: RootState) => state.basket.products);

  return (
    <>
      <div className="topbar" style={{ minHeight: '7vh' }}>
        <RemoteTopBar />
      </div>
      <div style={{ minHeight: '5vh' }}>
        <RemoteNavbar selectedProducts={selectedProducts} />
      </div>
      <div style={{ padding: '20px' }}>
        <Component {...pageProps} selectedProducts={selectedProducts} />
      </div>
      <RemoteFooter />
    </>
  );
}
