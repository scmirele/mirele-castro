import * as S from './App.styled'
import { GlobalStyle, StyledProvider } from './presentation/external/styled'

function App() {
  return (
    <StyledProvider>
      <S.Container></S.Container>
      <GlobalStyle />
    </StyledProvider>
  )
}

export default App
