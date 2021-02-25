import { AllPostsDataStaticProps } from "../../../interfaces/pages";
import { getSortedPostsData } from "../../../lib/posts";

export async function getStaticProps(): Promise<{
  props: AllPostsDataStaticProps;
}> {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
