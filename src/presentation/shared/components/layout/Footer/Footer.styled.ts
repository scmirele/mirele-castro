import styled from 'styled-components'

import { theme } from '../../../../external/styled'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
  margin-top: 13.5rem;
  gap: 11.1rem;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 6.6rem;
`

export const Link = styled.a`
  width: fit-content;
`
export const CopywriterText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${theme.colors.white};
  opacity: 0.5;
`
