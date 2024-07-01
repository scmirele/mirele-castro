import { CImage } from '@coreui/react'

import { Page } from '../../../../shared/components/layout'

import RocketIcon from '../../../../../../public/icons/rocket.svg'

import * as S from './HeroSection.styled'

export function HeroSection() {
  return (
    <Page.Wrapper>
      <S.Container id="about-me">
        <S.AboutContainer>
          <S.TitleContainer>
            <S.PseudoElementLeft></S.PseudoElementLeft>
            <S.PseudoElementTop></S.PseudoElementTop>
            <S.PseudoElementRight></S.PseudoElementRight>
            <S.Title>Mirele Castro</S.Title>
            <S.Greetings>
              hello! <br /> my name is
            </S.Greetings>
          </S.TitleContainer>
          <S.TextAboutMe>
            Sou uma UI Designer dedicada a criar interfaces funcionais e
            intuitivas que atendam às necessidades dos usuários. Atualmente,
            estou fazendo graduação em Design, onde continuo a expandir meu
            conhecimento e habilidades na área. Tenho participado de projetos
            colaborativos que me permitiram desenvolver habilidades de trabalho
            em equipe e aprimorar minha criatividade na resolução de problemas
            de design.
          </S.TextAboutMe>
        </S.AboutContainer>
        <S.MyJourneyContainer>
          <S.MyJourneyTitle>Minha Jornada</S.MyJourneyTitle>
          <S.MyJourneyParagraph>
            Participei de eventos na área da tecnologia e inovação que me <br />
            proporcionaram oportunidades de aprendizado e crescimento.
          </S.MyJourneyParagraph>
          <S.Participations>
            <S.Participation>
              <CImage src={RocketIcon} alt="" width={40} height={40} /> Startup
              Weekend Youth 2023 - 1º lugar
            </S.Participation>
            <S.Participation>
              <CImage src={RocketIcon} alt="" width={40} height={40} />
              Startup Weekend Cidades Inteligentes 2023 - Menção honrosa
            </S.Participation>
            <S.Participation>
              <CImage src={RocketIcon} alt="" width={40} height={40} /> Startup
              Weekend Educação 2023 - Staff
            </S.Participation>
          </S.Participations>
        </S.MyJourneyContainer>
      </S.Container>
    </Page.Wrapper>
  )
}
