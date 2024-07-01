'use client'

import { styled } from 'styled-components'

import { theme } from '../../../../external/styled'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 100px;
  padding-top: 8.2rem;
  color: ${theme.colors.white};

  @media (max-width: ${theme.media.md}) {
  }
`

export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${theme.media.md}) {
    flex-direction: column;
  }
`
export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  padding-top: 2rem;
  padding-left: 5.7rem;
  padding-bottom: 3.7rem;
  padding-right: 3rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 7px;
    padding: 0.8px;
    background: linear-gradient(50deg, gray, transparent);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

const DefaultPseudoElement = styled.span`
  position: absolute;
  background-color: ${theme.colors.black700};
  top: 0;
`

export const PseudoElementLeft = styled(DefaultPseudoElement)`
  width: 7px;
  height: 20%;
  left: -1px;
`

export const PseudoElementTop = styled(DefaultPseudoElement)`
  width: 100%;
  height: 20px;
  top: -1px;
  left: 0;
`

export const PseudoElementRight = styled(DefaultPseudoElement)`
  width: 6px;
  height: 100%;
  right: -1px;
`

export const Title = styled.h1`
  font-size: ${theme.fontSize.text_6xl};
  font-weight: 800;

  @media (max-width: ${theme.media.sm}) {
    font-size: ${theme.fontSize.text_4xl};
  }
`

export const Greetings = styled.p`
  font-size: ${theme.fontSize.text_3xl};
  font-weight: 400;
`
export const TextAboutMe = styled.p`
  position: relative;
  top: 10rem;
  width: 47.6rem;
  padding-left: 4rem;

  font-size: ${theme.fontSize.text_2xs};
  @media (max-width: ${theme.media.md}) {
    width: 100%;
    padding-left: 0;
  }
`

export const MyJourneyContainer = styled.div``

export const MyJourneyTitle = styled.h2`
  font-size: ${theme.fontSize.text_4xl};
  font-weight: 700;
  margin-bottom: 3.2rem;
`

export const MyJourneyParagraph = styled.p`
  margin-bottom: 5.2rem;
  font-size: ${theme.fontSize.text_2xs};
  font-weight: 400;
`

export const Participations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
`

export const Participation = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: ${theme.fontSize.text_xs};
  font-weight: 400;
`
