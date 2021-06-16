import { AllPostsDataStaticProps } from "../../../typings/pages";
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
