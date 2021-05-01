import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  description: string
  stack: string
  link: string
  link_bis?: string
}

const ProjectCardWrapper = styled.div`
  margin: 3rem 15rem;
  border: 1px solid #e6e6e6;
  border-radius: 15px;
  display: flex;
  padding: 2rem;
  box-shadow: 2px 2px 2px #e6e6e6;
`

const TextWrapper = styled.div``

const TitleWrapper = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`

const DescriptionWrapper = styled.div`
  font-weight: 300;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const StackWrapper = styled.span`
  font-weight: 300;
`

export const ProjectCard: FC<Props> = ({
  name,
  description,
  stack,
  link,
  link_bis,
}) => {
  return (
    <ProjectCardWrapper>
      <TextWrapper>
        <TitleWrapper>{name}</TitleWrapper>
        <DescriptionWrapper>{description}</DescriptionWrapper>
        <StackWrapper>Stack: {stack}</StackWrapper>
      </TextWrapper>
    </ProjectCardWrapper>
  )
}
