import { CImage } from '@coreui/react'

import { Page } from '../../../../shared/components/layout'

import IconRightArrow from '../../../../../../public/icons/icon-right-arrow.svg'
import LawFirmWebsiteImage from '../../../../../../public/images/law-firm-website.svg'
import VaccinationCardWebsiteImage from '../../../../../../public/images/vaccination-card-website.svg'

import * as S from './ProjectsSection.styled'

export function ProjectsSection() {
  return (
    <Page.Wrapper>
      <S.Container id="projects">
        <S.SectionTitle>Projetos</S.SectionTitle>
        <S.ProjectContainer reverse={false}>
          <S.ProjectImageContainer>
            <CImage src={LawFirmWebsiteImage} alt="image from a law website " />
            <S.TechnologiesUsedContainer>
              <S.ContentOfTechnologies>
                <S.Title>DATA</S.Title>
                <S.Description>Agosto de 2023 - Novembro de 2023</S.Description>
              </S.ContentOfTechnologies>
              <S.ContentOfTechnologies>
                <S.Title>FERRAMENTA</S.Title>
                <S.Description>Figma</S.Description>
              </S.ContentOfTechnologies>
            </S.TechnologiesUsedContainer>
          </S.ProjectImageContainer>
          <S.ProjectTextContainer>
            <S.ProjectInfoTitle>SITE DE ADVOCACIA</S.ProjectInfoTitle>
            <S.ProjectInfoDescription>
              Desenvolvido com o objetivo de criar um espaço informativo com
              conteúdos voltado para a área de advocacia. Projetado para atender
              às necessidades tanto de profissionais da área quanto do público
              em geral. Além disso, ele fornece informações completas e
              detalhadas sobre o escritório de advocacia, suas áreas de atuação,
              e os serviços oferecidos.
            </S.ProjectInfoDescription>
            <S.ShowMore>
              SAIBA MAIS <CImage src={IconRightArrow} alt="" />
            </S.ShowMore>
          </S.ProjectTextContainer>
        </S.ProjectContainer>

        <S.ProjectContainer reverse={true}>
          <S.ProjectImageContainer>
            <CImage
              src={VaccinationCardWebsiteImage}
              alt="image from a law website "
            />
            <S.TechnologiesUsedContainer>
              <S.ContentOfTechnologies>
                <S.Title>DATA</S.Title>
                <S.Description>
                  Setembro de 2023 - Outubro de 2023
                </S.Description>
              </S.ContentOfTechnologies>
              <S.ContentOfTechnologies>
                <S.Title>FERRAMENTA</S.Title>
                <S.Description>Figma</S.Description>
              </S.ContentOfTechnologies>
            </S.TechnologiesUsedContainer>
          </S.ProjectImageContainer>
          <S.ProjectTextContainer>
            <S.ProjectInfoTitle>CARTEIRA DE VACINAÇÃO</S.ProjectInfoTitle>
            <S.ProjectInfoDescription>
              O projeto tem como objetivo facilitar o acesso à informação e
              envolver pais e responsáveis no processo de imunização dos seus
              filhos. O aplicativo permitirá gerenciar e acompanhar a vacinação
              das crianças, fornecendo orientações e informações essenciais.
              Além disso, oferecerá recursos para monitorar o desenvolvimento
              infantil, visando se tornar uma carteira digital completa para a
              saúde das crianças.
            </S.ProjectInfoDescription>
            <S.ShowMore>
              SAIBA MAIS <CImage src={IconRightArrow} alt="" />
            </S.ShowMore>
          </S.ProjectTextContainer>
        </S.ProjectContainer>
      </S.Container>
    </Page.Wrapper>
  )
}
