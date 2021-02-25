import { PostsGetStaticPropsData } from "../../../../interfaces/pages/posts";
import { getSortedPostsData } from "../../../../lib/posts";

export async function getStaticProps(): Promise<{ props: PostsGetStaticPropsData }> {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
