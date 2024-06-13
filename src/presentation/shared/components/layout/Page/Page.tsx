import { Wrapper } from '../Wrapper/Wrapper'

export function Root({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export const Page = {
  Root,
  Wrapper
}
