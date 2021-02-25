import { NextPage } from "next";
import { Layout } from "../../components/Layout";
import { LayoutHeadProp } from "../../interfaces/components/Layout";
import { PostsGetStaticPropsData } from "../../interfaces/pages/posts";

const head: LayoutHeadProp = {
  title: "All posts",
  description: "This page contains all the posts on the site",
};

const Posts: NextPage<PostsGetStaticPropsData> = ({ allPostsData }) => {
  return (
    <Layout headProp={head}>
      Hi from all posts
      {allPostsData.map((postData) => (
        <ul key={postData.id}>
          <li>{JSON.stringify(postData)}</li>
        </ul>
      ))}
    </Layout>
  );
};

export { getStaticProps } from "../../helpers/next/pages/posts/index";

export default Posts;
