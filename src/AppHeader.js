import styled from 'styled-components/macro'

// Getting Started

export default function AppHeader() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background: papayawhip;
  padding: 2px;
`

const Title = styled.h1`
  color: palevioletred;
  text-align: center;
  font-size: 24px;
  line-height: 1rem;
`
