import styled from 'styled-components'

import { theme } from '../../../../external/styled'

export const Container = styled.header`
  display: flex;
  padding-top: 5.5rem;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6.2rem;
`
export const Link = styled.a`
  font-size: 1.6rem;
  font-weight: 400;

  & {
    display: block;
    position: relative;
  }

  &::before,
  &::after {
    width: 0%;
    height: 2px;
    content: '';
    position: absolute;
    top: 100%;
    display: block;
    background: transparent;
    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &::before {
    left: -1.5px;
  }

  &::after {
    left: 1.5px;
    background: transparent;
  }

  &:hover::before {
    background: ${theme.colors.white};
    width: 100%;
  }

  &:hover::after {
    background: transparent;
    width: 100%;
    transition: 0s;
  }
`
