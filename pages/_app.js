import '../styles/globals.css';
import AppContext from '../src/context/AppContext';
import useInitialState from '../src/hooks/useInitialState';

function MyApp({ Component, pageProps }) {

  const store = useInitialState();

  return (
      <AppContext.Provider value={store}>
        <Component {...pageProps} />
      </AppContext.Provider>
    )
}

export default MyApp
