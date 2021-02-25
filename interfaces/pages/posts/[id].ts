import { GetAllPostsIdsValues, SortedPostsData } from "../../lib/posts";

export interface GetIdStaticPathsValues {
    paths: GetAllPostsIdsValues[];
    fallback: boolean;
}

export interface GetIdStaticPropsValues {
    postData: SortedPostsData;
}
