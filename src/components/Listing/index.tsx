import { FC } from 'react'
import styled from 'styled-components'

import { MY_PROJECTS } from '../../constants'
import { ProjectCard } from '../ProjectCard'

const CardsWrapper = styled.div`
  padding-top: 3rem;
`

const TitleProjects = styled.span`
  font-weight: 600;
  margin-left: 5rem;
  font-size: 1.8rem;
  color: #f6c71f;
`

const LineWrapper = styled.div`
  text-align: center;
  width: 33%;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
`

export const Listing: FC = () => {
  return (
    <Wrapper>
      <CardsWrapper>
        <TitleProjects>My projects</TitleProjects>
        {MY_PROJECTS.map(({ name, description, stack, link, image }, index) => (
          <ProjectCard
            key={`${index}-${name}`}
            name={name}
            description={description}
            stack={stack}
            link={link}
            image={image}
            data-sal="slide-up"
            sal-duration="3s"
          />
        ))}
      </CardsWrapper>
      <LineWrapper></LineWrapper>
    </Wrapper>
  )
}
