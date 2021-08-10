import React from 'react'
import styled from 'styled-components'

import linkedInLogo from '../../assets/linkedin_logo.png'
import githubLogo from '../../assets/github_logo.png'
import freecodecampLogo from '../../assets/freecodecamp_logo.png'

const Wrapper = styled.div`
  min-height: 4rem;
  background-color: #f6c71f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
`

const Image = styled.img`
  margin: 0.8rem;
`

const Link = styled.a`
  display: flex;
  align-items: center;
`

export const Footer = () => {
  return (
    <Wrapper>
      <span style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        ...and if you want to continue the tour:
      </span>
      <ButtonWrapper>
        <Link href="https://www.linkedin.com/in/clementhere/?originalSubdomain=fr">
          <Image alt="linkedin" src={linkedInLogo} width="20" />
        </Link>
        <Link href="https://github.com/Ovicakov">
          <Image alt="github" src={githubLogo} width="20" />
        </Link>
      </ButtonWrapper>
      <Link href="https://www.freecodecamp.org/certification/clement_h/javascript-algorithms-and-data-structures">
        <Image alt="github" src={freecodecampLogo} height="20" />
      </Link>
    </Wrapper>
  )
}
