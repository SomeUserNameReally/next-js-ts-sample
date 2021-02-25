import NextHead from "next/head";
import { defaultHeadProps } from "./lib";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Head: React.FC<Props> = ({ title, description, children }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <>{children}</>
    </NextHead>
  );
};

Head.defaultProps = defaultHeadProps;

export { Head };
