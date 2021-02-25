import Link from "next/link";
import { Head } from "../components/Head";
import { Layout } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { AllPostsDataStaticProps } from "../interfaces/pages";
import { NextPage } from "next";
import { Date } from "../components/Date/Date";

const Home: NextPage<AllPostsDataStaticProps> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head />
      <section className={utilStyles.headingMd}>
        <p>「ネッツ。ジェイエス」のために</p>
        <p>これは読者様の責任</p>
        <Link href="/posts">Go to all posts</Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export { getStaticProps } from "../helpers/next/pages";

export default Home;
