import styled from 'styled-components'

import { theme } from '../../../../external/styled'

export const Container = styled.header`
  display: flex;
  padding: 5.5rem 0;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6.2rem;
`
export const Link = styled.a`
  &:hover {
    color: ${theme.colors.white};
    filter: brightness(0.8);
  }

  font-size: 1.6rem;
  font-weight: 400;
`
