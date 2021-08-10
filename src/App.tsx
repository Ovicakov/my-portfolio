import { FC } from 'react'
import styled from 'styled-components'

import { Footer } from './components/Footer'
import { Listing } from './components/Listing'
import { Main } from './components/Main'

const HomeWrapper = styled.div`
  width: 100%;
`

const App: FC = () => (
  <HomeWrapper>
    <Main />
    <Listing />
    <Footer />
  </HomeWrapper>
)

export default App
