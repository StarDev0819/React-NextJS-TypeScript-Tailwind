import '../styles/tailwind.css';
import Layout from '../components/Layout';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import { useStore } from 'react-redux'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from "../store/index.js";

const WrappedApp = ({ Component, pageProps }) => {
  const store = useStore();
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        {/* <PersistGate
              persistor={store.__persistor}> */}

        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </PersistGate> */}
      </Provider >
    </ApolloProvider>
  )
};

WrappedApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default wrapper.withRedux(WrappedApp);
