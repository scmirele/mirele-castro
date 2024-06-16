import { CImage } from '@coreui/react'

import BallIcon from '../../../../../../public/icons/icon-ball.svg'
import EmailIcon from '../../../../../../public/icons/icon-email.svg'
import LinkedinIcon from '../../../../../../public/icons/linkedin.svg'

import * as S from './Footer.styled'

export function Footer() {
  return (
    <S.Container>
      <S.Nav>
        <S.Link href="#" target="blank">
          <CImage
            src={LinkedinIcon}
            height={45}
            width={45}
            alt="linkedin icon"
          />
        </S.Link>

        <S.Link href="#" target="blank">
          <CImage src={BallIcon} height={45} width={45} alt="ball icon" />
        </S.Link>

        <S.Link href="#" target="blank">
          <CImage src={EmailIcon} height={45} width={45} alt="email icon" />
        </S.Link>
      </S.Nav>
    </S.Container>
  )
}
