import { IPost } from 'src/interfaces';
import { ListRequestParams } from '.';

export type PostType = 'bookmark' | 'post';
export type PostPreview = IPost & { isBookmarked?: boolean };
export type PostListParams = ListRequestParams & Pick<IPost, 'tags'> & { q?: string };
export type RelatedPostListParams = BookmarkRelatedPostListParams | PostRelatedPostListParams;
export type BookmarkRelatedPostListParams = ListRequestParams & { bookmarkId: number };
export type PostRelatedPostListParams = ListRequestParams & { postId: number };
export type PostListFilter = Pick<PostListParams, 'tags' | 'q'>;
