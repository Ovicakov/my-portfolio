import { FC } from 'react'
import styled from 'styled-components'

import { MY_PROJECTS } from '../../constant'
import { ProjectCard } from '../ProjectCard'

/* css prop from styled component doest not work well :
https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
*/
const CardsWrapper = styled.div`
  padding-top: 3rem;
`

const TitleProjects = styled.span`
  font-weight: 600;
  margin-left: 5rem;
  font-size: 1.8rem;
  color: #f6c71f;
`

export const Listing: FC = () => {
  return (
    <CardsWrapper>
      <TitleProjects>My projects</TitleProjects>
      <>
        {MY_PROJECTS.map(({ name, description, stack, link, image }, index) => (
          <ProjectCard
            key={`${index}-${name}`}
            name={name}
            description={description}
            stack={stack}
            link={link}
            image={image}
          />
        ))}
      </>
    </CardsWrapper>
  )
}
