import styled from 'styled-components'

import { theme } from '../../../../../external/styled'

export const Container = styled.div`
  display: none;
  width: 32px;
  height: 24px;
  cursor: pointer;
  z-index: 20;

  @media (max-width: ${theme.media.md}) {
    display: flex;
    position: absolute;
    right: 10vw;
    &[dataVisible='true'] {
    }
  }
`

export const BurgerLine = styled.span<{ dataVisible: string }>`
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 12px;
  display: block;
  transition: background-color 0.5s ease-in-out;

  &::after,
  &::before {
    content: '';
    width: 100%;
    background-color: white;
    display: block;
    transition: all 0.5s ease-in-out;
    border-radius: 12px;
    height: 4px;
  }

  &::before {
    transform: translateY(-10px);
  }

  &::after {
    transform: translateY(10px);
    margin-top: -4px;
  }

  &[dataVisible='true'] {
    & {
      background-color: transparent;
    }

    &::before {
      transform: rotateZ(45deg) translateY(0);
    }

    &::after {
      transform: rotateZ(-45deg) translateY(0);
    }
  }
`
