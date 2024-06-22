'use client'

import { styled } from 'styled-components'

import { theme } from '../../../../external/styled'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 11.2rem;
  gap: 5.2rem;
`

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSize.text_4xl};
  font-weight: 700;
`

export const ProjectContainer = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  gap: 4.8rem;

  @media (max-width: ${theme.media.md}) {
    flex-direction: column;
  }
`

export const ProjectImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const TechnologiesUsedContainer = styled.div`
  display: flex;
  gap: 3.2rem;
`

export const ContentOfTechnologies = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: calc(${theme.fontSize.text_2xs} - 0.2rem);
  font-weight: 700;
`

export const Description = styled.p`
  font-size: calc(${theme.fontSize.text_2xs} - 0.4rem);
  font-weight: 400;
  color: ${theme.colors.white};
  opacity: 0.5;
`

export const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`

export const ProjectInfoTitle = styled.div`
  position: relative;

  font-size: ${theme.fontSize.text_md};
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    border-bottom: 1px solid ${theme.colors.white};
  }
`

export const ProjectInfoDescription = styled.div`
  font-size: ${theme.fontSize.text_2xs};
  font-weight: 400;
`

export const ShowMore = styled.div`
  display: flex;
  height: 5.1rem;
  width: 15.3rem;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.black900};

  font-size: calc(${theme.fontSize.text_2xs} - 0.2rem);
  font-weight: 500;

  border: 1px solid ${theme.colors.white};
  border-radius: 8px;
`
