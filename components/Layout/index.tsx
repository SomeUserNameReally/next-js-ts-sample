import { Head } from "../Head";
import { defaultHeadProps } from "../Head/lib";
import Image from "next/image";
import styles from "./styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import { PropsWithChildren } from "react";
import {
  LayoutHeadProp,
  LayoutPageOrigin,
} from "../../interfaces/components/Layout";

interface Props {
  home?: boolean;
  headProp?: LayoutHeadProp;
  origin?: LayoutPageOrigin;
}

const name = "金色の矢";

const Layout: React.FC<PropsWithChildren<Props>> = ({
  children,
  home = false,
  headProp,
  origin,
}) => {
  return (
    <div className={styles.container}>
      <Head title={headProp?.title} description={headProp?.description}>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
              defaultHeadProps.title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={defaultHeadProps.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href={origin?.path.toLowerCase() || "/"}>
            <a>← Back to {origin?.pageName.toLowerCase() || "home"}</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export { Layout };
