import { CImage } from '@coreui/react'

import BallIcon from '../../../../../../public/icons/icon-ball.svg'
import EmailIcon from '../../../../../../public/icons/icon-email.svg'
import LinkedinIcon from '../../../../../../public/icons/linkedin.svg'

import * as S from './Footer.styled'

export function Footer() {
  return (
    <S.Container id="contacts">
      <S.Nav>
        <S.Link
          href="https://www.linkedin.com/in/mirelescastro/"
          target="blank"
        >
          <CImage
            src={LinkedinIcon}
            height={45}
            width={45}
            alt="linkedin icon"
          />
        </S.Link>

        <S.Link href="https://dribbble.com/mirwle" target="blank">
          <CImage src={BallIcon} height={45} width={45} alt="ball icon" />
        </S.Link>

        <S.Link
          href="mailto:scmirele8@gmail.com?subject=Assunto%20do%20Email"
          target="blank"
        >
          <CImage src={EmailIcon} height={45} width={45} alt="email icon" />
        </S.Link>
      </S.Nav>
      <S.CopywriterText>
        © Mirele Castro 2024. Todos os direitos reservados.
      </S.CopywriterText>
    </S.Container>
  )
}
