import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

type ILinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>;

function Link({ to, children, className }: ILinkProps) {
  return (
    <StyledLink className={className} to={to}>
      {children}
    </StyledLink>
  );
}

export default Link;

const StyledLink = styled(RouterLink)`
  text-decoration: none;
`;
