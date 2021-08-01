import { FC } from 'react'
import styled from 'styled-components'

import { Listing } from './components/Listing'
import { Main } from './components/Main'

const HomeWrapper = styled.div`
  width: 100%;
`

const App: FC = () => (
  <HomeWrapper>
    <Main />
    {/* <Listing /> */}
  </HomeWrapper>
)

export default App
