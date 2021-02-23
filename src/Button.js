import styled from 'styled-components/macro'

// Adapting based on props

export default styled.button`
  width: 300px;
  margin: 0 auto;
  border: 2px solid palevioletred;
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  padding: 5px 20px;
`
