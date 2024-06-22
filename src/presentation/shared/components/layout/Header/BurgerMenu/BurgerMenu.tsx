import * as S from './BurgerMenu.styled'

interface BurgerMenuProps {
  changeVisibility?: () => void
  dataVisible: string
}

export function BurgerMenu({ changeVisibility, dataVisible }: BurgerMenuProps) {
  return (
    <S.Container onClick={changeVisibility}>
      <S.BurgerLine dataVisible={dataVisible}></S.BurgerLine>
    </S.Container>
  )
}
