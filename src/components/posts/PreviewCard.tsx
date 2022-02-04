import React from 'react';
import styled from 'styled-components';

import { PostPreviewCardActionMenu } from 'src/components/posts';
import { P, Link, MaterialIcon, Checkbox } from 'src/components/common';
import { CACTUS_GREEN, GREY } from 'src/constant';
import { useBookmarkIsReadEdit } from 'src/lib/hooks';

interface IPostPreviewCardProps {
  type?: 'default' | 'toRead';
  postId?: number;
  bookmarkId?: number;
  title: string;
  thumbnail: string;
  description: string;
  tags?: string[];
  isBookmarked?: boolean;
  url: string;
  dueDate?: string;
  isRead?: boolean;
}

export default function PostPreviewCard({
  postId,
  bookmarkId,
  title,
  thumbnail,
  description,
  tags,
  type = 'default',
  isBookmarked = true,
  url,
  dueDate,
  isRead,
}: IPostPreviewCardProps) {
  const { toggle } = useBookmarkIsReadEdit({ id: bookmarkId, isRead });

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/favicon.svg';
  };

  if (type === 'toRead') {
    return (
      <RowWrapper>
        <CheckboxWrapper>
          <Checkbox id={String(bookmarkId)} isChecked={isRead} toggle={toggle} />
        </CheckboxWrapper>
        <Wrapper>
          <PostPreviewCardLink bookmarkId={bookmarkId} url={url}>
            <ContentWrapper>
              <PWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
              </PWrapper>
              <Img src={thumbnail} onError={handleImgError} />
            </ContentWrapper>
          </PostPreviewCardLink>
          <RowWrapper>
            {tags?.map((tag) => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </RowWrapper>
          <Footer>
            <CalendarIcon />
            {/* @TO_BE_IMPROVED: date format 추가 */}
            <DueDate>{dueDate ?? '마감기한 없음'}</DueDate>
            <PostPreviewCardActionMenu postId={postId} bookmarkId={bookmarkId} isBookmarked={isBookmarked} />
          </Footer>
        </Wrapper>
      </RowWrapper>
    );
  }

  return (
    <Wrapper>
      <PostPreviewCardLink bookmarkId={bookmarkId} url={url}>
        <ContentWrapper>
          <PWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </PWrapper>
          <Img src={thumbnail} onError={handleImgError} />
        </ContentWrapper>
      </PostPreviewCardLink>
      <Footer>
        {tags?.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
        <PostPreviewCardActionMenu postId={postId} bookmarkId={bookmarkId} isBookmarked={isBookmarked} />
      </Footer>
    </Wrapper>
  );
}

type PostPreviewCardLinkProps = Pick<IPostPreviewCardProps, 'bookmarkId' | 'url'> & { children: React.ReactNode };

function PostPreviewCardLink({ bookmarkId, url, children }: PostPreviewCardLinkProps) {
  if (bookmarkId) {
    return <Link to={`/bookmarks/${bookmarkId}`}>{children}</Link>;
  }

  return (
    <A href={url} target="_blank">
      {children}
    </A>
  );
}

const Title = styled(P).attrs({
  fontSize: '1.8rem',
  fontWeight: 500,
  ellipsis: true,
  numOfLines: 1,
  width: '100%',
})`
  margin-bottom: 0.6rem;
`;

const Description = styled(P).attrs({
  fontSize: '1.4rem',
  lineHeight: '2rem',
  ellipsis: true,
  numOfLines: 2,
  width: '100%',
})`
  margin-bottom: 0.4rem;
`;

const Tag = styled(P).attrs({
  color: CACTUS_GREEN[500],
})`
  margin-right: 0.8rem;
`;

const DueDate = styled(P).attrs({
  color: GREY[700],
})`
  margin-left: 0.4rem;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${GREY[300]};
`;

const Img = styled.img`
  object-fit: cover;
  margin-left: 2rem;
  border-radius: 0.4rem;
  width: 7.2rem;
  height: 7.2rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
`;

const PWrapper = styled.div`
  max-width: calc(100% - 9.2rem);
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const A = styled.a`
  text-decoration: none;
`;

const RowWrapper = styled.div`
  display: flex;
`;

const CheckboxWrapper = styled.div`
  margin: 0.2rem 0.8rem 0 0;
`;

const CalendarIcon = styled(MaterialIcon).attrs({ type: 'event_available', width: '1.8rem', hoverColor: GREY[700] })`
  margin-top: 0.2rem;
`;
