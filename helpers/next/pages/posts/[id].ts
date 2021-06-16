import { GetStaticPropsResult } from "next";
import {
  GetAllPostsIdsValues,
  GetPostDataValues,
} from "../../../../typings/lib/posts";
import { GetIdStaticPathsValues } from "../../../../typings/pages/posts/[id]";
import { getPostData, getAllPostIds } from "../../../../lib/posts";

export async function getStaticProps({
  params: { id },
}: GetAllPostsIdsValues): Promise<
  GetStaticPropsResult<{ postData: GetPostDataValues }>
> {
  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths(): Promise<GetIdStaticPathsValues> {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
