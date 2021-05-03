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
  height: 2.5rem;
  border: none;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    border: 2px solid #ebebeb;
    transition: all 150ms ease-in-out;
  }

  &:hover::before {
    top: calc(2px * -2);
    left: calc(2px * -2);
    right: calc(2px * -2);
    bottom: calc(2px * -2);
  }
`

export const ButtonChoice: FC<Props> = ({ children, onClick }) => (
  <Button onClick={() => onClick && onClick()}>{children}</Button>
)
