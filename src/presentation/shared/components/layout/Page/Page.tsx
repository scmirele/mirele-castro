import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Wrapper } from '../Wrapper/Wrapper'

export function Root({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export const Page = {
  Root,
  Wrapper,
  Header,
  Footer
}
