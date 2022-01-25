import { IPost } from 'src/interfaces';
import { ListRequestParams } from '.';

export type PostPreview = Pick<IPost, 'id' | 'title' | 'thumbnail' | 'description' | 'url' | 'tags'>;
export type PostListParams = ListRequestParams & Pick<IPost, 'tags'> & { q?: string };
export type BookmarkRelatedPostListParams = ListRequestParams & { bookmarkId: number };
export type PostRelatedPostListParams = ListRequestParams & { postId: number };
export type PostListFilter = Pick<PostListParams, 'tags' | 'q'>;
