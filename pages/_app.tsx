import App, {AppContext , AppProps , AppInitialProps} from "next/app";
import GlobalStyle from "../styles/globalStyle";
import Header from "../components/Header";

const app = ({Component , pageProps }:AppProps) => {
    return(
        <>
            <GlobalStyle/>
            <Header/>
            <Component {...pageProps} />
        </>
    );
};

export default app;