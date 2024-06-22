import styled from 'styled-components'

import { theme } from '../../../../external/styled'

export const Container = styled.header<{ dataVisible: string }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 25vh;
  padding: 0 min(10vw, 1292px);

  @media (max-width: ${theme.media.md}) {
    background-color: ${theme.colors.black700};

    &[dataVisible='true'] {
      z-index: 100;
      position: fixed;
    }
  }
`
export const Nav = styled.nav<{ dataVisible: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6.2rem;

  @media (max-width: ${theme.media.md}) {
    display: none;

    &[dataVisible='true'] {
      position: fixed;
      z-index: 100;
      top: 25vh;

      display: flex;
      justify-content: start;
      flex-direction: column;
      height: 80vh;
      left: 0;
      background-color: ${theme.colors.black700};
    }
  }
`
export const Link = styled.a`
  position: relative;
  font-size: 1.6rem;
  font-weight: 400;

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
