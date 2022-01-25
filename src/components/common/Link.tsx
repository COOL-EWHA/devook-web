import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

type ILinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement> & { disabled?: boolean };

function Link({ className, to, disabled = false, children }: ILinkProps) {
  const cn = disabled ? `${className} disabled-link` : className;

  return (
    <StyledLink className={cn} to={to}>
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
