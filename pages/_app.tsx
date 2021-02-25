import { AppPropsType } from "next/dist/next-server/lib/utils";
import "../styles/global.css";

const App: React.FC<AppPropsType> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
