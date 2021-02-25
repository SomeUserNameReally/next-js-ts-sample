import { NextPage } from "next";
import { Date } from "../../components/Date/Date";
import { Head } from "../../components/Head";
import { Layout } from "../../components/Layout";
import { GetIdStaticPropsValues } from "../../interfaces/pages/posts/[id]";

import utilStyles from "../../styles/utils.module.css";

const Post: NextPage<GetIdStaticPropsValues> = ({ postData }) => {
  return (
    <Layout>
      <Head title={postData.title} />
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export {
  getStaticPaths,
  getStaticProps,
} from "../../helpers/next/pages/posts/[id]";

export default Post;
