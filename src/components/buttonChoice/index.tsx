import styled from 'styled-components'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick?: () => void
}

const Button = styled.button`
  border-radius: 20px;
  margin-top: 4rem;
  font-size: 1rem;
  width: 15rem;
  height: 2rem;

  &:hover {
    background-color: #418fde;
  }

  &:active {
    background-color: white;
  }
`

export const ButtonChoice: FC<Props> = ({ children, onClick }) => {
  return <Button onClick={(e) => onClick && onClick()}>{children}</Button>
}
