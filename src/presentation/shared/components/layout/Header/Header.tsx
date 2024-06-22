import { CImage } from '@coreui/react'
import { useState } from 'react'

import Logo from '../../../../../../public/images/logoMirele.svg'

import { BurgerMenu } from './BurgerMenu/BurgerMenu'
import * as S from './Header.styled'

export function Header() {
  const [isVisible, setIsVisible] = useState(false)

  function changeVisibility() {
    setIsVisible(!isVisible)
  }

  return (
    <S.Container dataVisible={`${isVisible}`}>
      <CImage src={Logo} alt="Mirele Logo" width={60} height={71} />

      <S.Nav dataVisible={`${isVisible}`}>
        <S.Link href="#about-me" onClick={changeVisibility}>
          Sobre mim
        </S.Link>
        <S.Link href="#projects" onClick={changeVisibility}>
          Projetos
        </S.Link>
        <S.Link href="#contacts" onClick={changeVisibility}>
          Contato
        </S.Link>
      </S.Nav>
      <BurgerMenu
        changeVisibility={changeVisibility}
        dataVisible={`${isVisible}`}
      />
    </S.Container>
  )
}
