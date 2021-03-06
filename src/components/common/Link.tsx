import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

type ILinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>;

function Link({ className, to, children, onClick }: ILinkProps) {
  return (
    <StyledLink className={className} to={to} onClick={onClick}>
      {children}
    </StyledLink>
  );
}

export default Link;

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  width: 100%;
  .disabled-link {
    pointer-events: none;
  }
`;
