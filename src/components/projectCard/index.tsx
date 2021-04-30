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
  margin: 5rem;
  border: 1px solid #dadada;
  border-radius: 10px;
  display: flex;
`

const DescriptionWrapper = styled.div``

export const ProjectCard: FC<Props> = ({
  name,
  description,
  stack,
  link,
  link_bis,
}) => {
  return (
    <ProjectCardWrapper>
      <DescriptionWrapper>{name}</DescriptionWrapper>
    </ProjectCardWrapper>
  )
}
