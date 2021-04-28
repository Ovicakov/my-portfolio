import { ButtonChoice } from './components/buttonChoice'
import { Collapse } from './components/collapse'
import profilPicture from './assets/bearded-man.png'
import { FC, useState } from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  background-color: #f6c71f;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 834px) {
    flex-direction: column;
  }

  & img {
    align-self: end;
    margin-right: 5rem;

    @media (max-width: 530px) {
      margin-right: 0rem;
    }
  }
`

const TextWrapper = styled.div`
  padding: 12rem 5rem 12rem 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 834px) {
    padding-bottom: 6rem;
  }
`

const ProfilWrapper = styled.div`
  font-weight: 400;
  font-size: 2rem;
`

const StandfirstWrapper = styled.span`
  margin-top: 1rem;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 834px) {
    flex-direction: column;
    align-items: center;
  }
`

const App: FC = () => {
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false)

  const handleIsCurriculumOpen = () => {
    setIsCurriculumOpen(!isCurriculumOpen)
  }

  return (
    <>
      <MainWrapper>
        <TextWrapper>
          <ProfilWrapper>
            Hey, I'm Clement.
            <br />
            I'm coding stuff with React and Javascript.
          </ProfilWrapper>
          <StandfirstWrapper>
            I enjoy resolving algorithms during my free time, and also learn new
            things (everyday).
          </StandfirstWrapper>
          <ButtonsWrapper>
            <ButtonChoice onClick={handleIsCurriculumOpen}>
              Few words about me
            </ButtonChoice>
            <ButtonChoice>Who's birthday is it ? </ButtonChoice>
          </ButtonsWrapper>
        </TextWrapper>
        <img src={profilPicture} width="350" height="350" alt="profil" />
      </MainWrapper>
      {isCurriculumOpen && <Collapse />}
    </>
  )
}

export default App
