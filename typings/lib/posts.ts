export interface SortedPostsData {
  id: string;
  date?: string;
  title?: string;
  [key: string]: string;
}

export interface GetAllPostsIdsValues {
  params: { id: string };
}

export interface GetPostDataValues extends SortedPostsData {
  contentHtml: string;
}
