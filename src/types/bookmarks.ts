import { IBookmarkPost } from 'src/interfaces';

export type BookmarkPostPreview = Pick<IBookmarkPost, 'id' | 'title' | 'thumbnail' | 'description' | 'url' | 'tags'>;
