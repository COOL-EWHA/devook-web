export interface IBookmark {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  url: string;
  tags?: string[];
  createdAt: Date;
  memo?: string;
}
