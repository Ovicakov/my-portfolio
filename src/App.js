import styled from '@emotion/styled'

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

function App() {
  return (
    <MainWrapper>
      <Button>Let's try something</Button>
    </MainWrapper>
  )
}

export default App
