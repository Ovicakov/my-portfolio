import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'

import { API_URL, MY_PROJECTS } from './constant'
import { ButtonChoice } from './components/buttonChoice'
import { Collapse } from './components/collapse'
import profilPicture from './assets/bearded-man.png'
import { ProjectCard } from './components/projectCard'

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

const CardsWrapper = styled.div`
  padding-top: 3rem;
`

const TitleProjects = styled.span`
  font-weight: 600;
  margin-left: 15rem;
  font-size: 1.8rem;
  color: #f6c71f;
`

const App: FC = () => {
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false)
  const [isChuckVisible, setIsChuckVisible] = useState(false)
  const [chuckQuote, setChuckQuote] = useState('')

  const handleIsCurriculumOpen = () => {
    setIsCurriculumOpen(!isCurriculumOpen)
  }

  const handleIsChuckVisible = () => {
    setIsChuckVisible(!isChuckVisible)
  }

  useEffect(() => {
    if (isChuckVisible) return

    async function getApiData(url: string): Promise<void> {
      const response = await fetch(url)
      const data: Record<string, string> = await response.json()
      response.ok
        ? setChuckQuote(data?.value)
        : Promise.reject(new Error('The fetch failed'))
    }
    setTimeout(() => getApiData(API_URL), 600)
  }, [isChuckVisible])

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
            I enjoy spend my free time in resolving algorithms, and learn new
            things about code, but not only.
          </StandfirstWrapper>
          <ButtonsWrapper>
            <ButtonChoice onClick={handleIsCurriculumOpen}>
              {!isCurriculumOpen ? 'Few words about me' : 'Close it !'}
            </ButtonChoice>
            <ButtonChoice onClick={handleIsChuckVisible}>
              {!isChuckVisible ? 'What about Chuck Norris ?' : 'Close it !'}
            </ButtonChoice>
          </ButtonsWrapper>
          {<Collapse isCurriculumOpen={isCurriculumOpen} />}
          {<Collapse isChuckVisible={isChuckVisible} chuckQuote={chuckQuote} />}
        </TextWrapper>
        <img src={profilPicture} width="350" height="350" alt="profil" />
      </MainWrapper>
      <CardsWrapper>
        <TitleProjects>My projects</TitleProjects>
        <>
          {MY_PROJECTS.map(
            ({ name, description, stack, link, link_bis, image }) => (
              <ProjectCard
                name={name}
                description={description}
                stack={stack}
                link={link}
                link_bis={link_bis}
                image={image}
              />
            )
          )}
        </>
      </CardsWrapper>
    </>
  )
}

export default App
