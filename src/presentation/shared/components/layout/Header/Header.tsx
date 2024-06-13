import { CImage } from '@coreui/react'

import Logo from '../../../../../../public/images/logoMirele.svg'

import * as S from './Header.styled'

export function Header() {
  return (
    <S.Container>
      <CImage src={Logo} alt="Mirele Logo" width={60} height={71} />
      <S.Nav>
        <S.Link>Sobre mim</S.Link>
        <S.Link>Projetos</S.Link>
        <S.Link>Contato</S.Link>
      </S.Nav>
    </S.Container>
  )
}
