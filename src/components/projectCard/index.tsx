import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  description: string
  stack: string
  link: string
  image: string
  link_bis?: string
}

const ProjectCardWrapper = styled.div`
  margin: 3rem 15rem;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`

const TextWrapper = styled.div`
  padding-right: 4rem;
`

const TitleWrapper = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: #b63e38;
`

const DescriptionWrapper = styled.div`
  font-weight: 300;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const StackWrapper = styled.span`
  font-weight: 300;
  color: grey;
`

export const ProjectCard: FC<Props> = ({
  name,
  description,
  stack,
  link,
  link_bis,
  image,
}) => {
  return (
    <ProjectCardWrapper>
      <TextWrapper>
        <TitleWrapper>{name}</TitleWrapper>
        <DescriptionWrapper>{description}</DescriptionWrapper>
        <StackWrapper>Stack: {stack}</StackWrapper>
      </TextWrapper>
      <img src={image} alt="projet" />
    </ProjectCardWrapper>
  )
}
