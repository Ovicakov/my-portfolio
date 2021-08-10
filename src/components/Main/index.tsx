import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'

import { API_URL } from '../../constants'
import { ButtonChoice } from '../ButtonChoice'
import { Collapse } from '../Collapse'
import profilPicture from '../../assets/bearded-man.png'

const MainWrapper = styled.div`
  background-color: #f6c71f;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 834px) {
    flex-direction: column;
  }

  & img {
    margin-right: 5rem;
  }
`

const TextWrapper = styled.div`
  padding: 8rem 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
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
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 350px;
  height: 350px;
  margin-right: 5rem;
  align-self: flex-end;

  @media (max-width: 1250px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 1150px) {
    display: none;
  }

  @media (max-width: 834px) {
    display: block;
  }
`

export const Main: FC = () => {
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
        : Promise.reject(new Error('Fetch failed :('))
    }
    setTimeout(() => getApiData(API_URL), 600)
  }, [isChuckVisible])

  return (
    <MainWrapper>
      <TextWrapper>
        <ProfilWrapper>
          Hey, I'm Clement.
          <br />
          I'm coding stuff with React and Javascript.
        </ProfilWrapper>
        <StandfirstWrapper>
          I enjoy to spend my free time solving algorithms, and learning new
          things about code, but not only.
        </StandfirstWrapper>
        <ButtonsWrapper>
          <ButtonChoice onClick={handleIsCurriculumOpen}>
            {!isCurriculumOpen ? 'Few words about me' : 'Close it !'}
          </ButtonChoice>
          <Collapse isCurriculumOpen={isCurriculumOpen} />
          <ButtonChoice onClick={handleIsChuckVisible}>
            {!isChuckVisible ? 'What about Chuck Norris ?' : 'Close it !'}
          </ButtonChoice>
          <Collapse isChuckVisible={isChuckVisible} chuckQuote={chuckQuote} />
        </ButtonsWrapper>
      </TextWrapper>
      <Image src={profilPicture} alt="profil" />
    </MainWrapper>
  )
}
