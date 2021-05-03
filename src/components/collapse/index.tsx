import styled from 'styled-components'
import { FC } from 'react'

interface Props {
  isCurriculumOpen?: boolean
  isChuckVisible?: boolean
  chuckQuote?: string
}

const BaseButton = styled.span`
  transition: all 600ms ease-in-out;
  overflow: hidden;
`

const TextWrapper = styled(BaseButton)`
  margin-top: 2rem;
  text-align: justify;
  width: 40rem;
  height: ${({ isCurriculumOpen }: Pick<Props, 'isCurriculumOpen'>) =>
    isCurriculumOpen ? '15rem' : 0};
  opacity: ${({ isCurriculumOpen }: Pick<Props, 'isCurriculumOpen'>) =>
    isCurriculumOpen ? 1 : 0};
  transition: all 600ms ease-in-out;
  overflow: hidden;
`

const QuoteWrapper = styled(BaseButton)`
  width: 40rem;
  margin-top: -1rem;
  height: ${({ isChuckVisible }: Pick<Props, 'isChuckVisible'>) =>
    isChuckVisible ? '6rem' : 0};
  opacity: ${({ isChuckVisible }: Pick<Props, 'isChuckVisible'>) =>
    isChuckVisible ? 1 : 0};

  & p {
    font-size: 0.6rem;
  }
`

export const Collapse: FC<Props> = ({
  isCurriculumOpen,
  isChuckVisible,
  chuckQuote,
}) => {
  return (
    <>
      <TextWrapper isCurriculumOpen={isCurriculumOpen}>
        <p>
          Front-end developer at leboncoin, I am working in the acquisition
          feature team. The purposes of this field is the performance
          optimization (CLS, LCP, web vitals...) and the SEO of the leboncoin.fr
          website.
          <br />
          <br />
          After studying communication and got my Master degree, I was strangely
          hired only by tech companies (software and web). And by dint of seeing
          lines of code, I decided to give it a try. I loved it. And I changed
          my job (but in the same company).
          <br />
          <br />
          Following bootcamp and obtaining my degree, I became a front-end
          developer. My daily work life nowadays is strewn with Javascript,
          React, Typescript, styled components, styled system, SASS, storybook
          and more other tools.
        </p>
      </TextWrapper>
      <QuoteWrapper isChuckVisible={isChuckVisible}>
        {chuckQuote + '*'}
        <br />
        <br />
        <p>* from api.chucknorris.io</p>
      </QuoteWrapper>
    </>
  )
}
