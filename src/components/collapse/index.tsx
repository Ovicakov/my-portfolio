import styled from 'styled-components'
import { FC, useState } from 'react'

const text = () => (
  <TextWrapper>
    Front-end developer at leboncoin, I am working in the acquisition feature
    team. The purposes of this field is the performance optimization (CLS, LCP,
    web vitals...) and the SEO of the leboncoin.fr website.
    <br />
    <br />
    After studying communication and obtaining my Master degree, I was strangely
    hired only by tech companies (software and web). And by dint of seeing lines
    of code, I decided to give it a try. I loved it. And I changed job (but in
    the same company).
    <br />
    <br />
    Following my 5 months bootcamp and obtaining my 2 years bachelor web and
    mobile web developer degree, I became a front-end developer. And my daily
    work life nowadays is strewn with Javascript, React, Typescript, styled
    components, styled system, SASS, storybook and more other tools.
    <br />
    <br />I love to learn new things and above all, to improve myself.
  </TextWrapper>
)

const TextWrapper = styled.p`
  width: 35rem;
  margin-top: 3rem;
  text-align: justify;
`

export const Collapse: FC = () => {
  return text()
}
