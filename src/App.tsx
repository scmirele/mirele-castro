import { HeroSection } from './presentation/modules/example/components/ExampleModule copy/HeroSection'
import { Page } from './presentation/shared/components/layout'
import { Header } from './presentation/shared/components/layout/Header/Header'

import * as S from './App.styled'
import { GlobalStyle, StyledProvider } from './presentation/external/styled'

function App() {
  return (
    <StyledProvider>
      <S.Container>
        <Page.Root>
          <Header />
          <HeroSection />
        </Page.Root>
      </S.Container>
      <GlobalStyle />
    </StyledProvider>
  )
}

export default App
