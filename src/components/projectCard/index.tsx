import { FC } from 'react'
import styled from 'styled-components'
import { useMobileView } from '../../hooks/useMobileView'

interface Props {
  name: string
  description: string
  stack: string
  link: string
  image: string
  link_bis?: string
}

const ProjectCardWrapper = styled.div`
  cursor: pointer;
  margin: 3rem 33% 3rem 5rem;
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
  color: #f6c71f;
`

const DescriptionWrapper = styled.div`
  font-weight: 300;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: black;
`

const StackWrapper = styled.span`
  font-weight: 300;
  color: grey;
`

const Link = styled.a`
  text-decoration: none;
`

export const ProjectCard: FC<Props> = ({
  name,
  description,
  stack,
  link,
  image,
}) => {
  return (
    <Link href={link} target="_blank">
      <ProjectCardWrapper>
        <TextWrapper>
          <TitleWrapper>{name}</TitleWrapper>
          <DescriptionWrapper>{description}</DescriptionWrapper>
          <StackWrapper>Stack: {stack}</StackWrapper>
        </TextWrapper>
        <img src={image} alt="projet" />
      </ProjectCardWrapper>
    </Link>
  )
}
