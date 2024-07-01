import * as Home from './presentation/modules/home/components'
import { Page } from './presentation/shared/components/layout'

import * as S from './App.styled'
import { GlobalStyle, StyledProvider } from './presentation/external/styled'

function App() {
  return (
    <StyledProvider>
      <S.Container>
        <Page.Root>
          <Page.Header />
          <Home.HeroSection />
          <Home.ProjectsSection />
          <Page.Footer />
        </Page.Root>
      </S.Container>
      <GlobalStyle />
    </StyledProvider>
  )
}

export default App
