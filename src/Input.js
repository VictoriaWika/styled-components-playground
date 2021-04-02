import styled from 'styled-components/macro'

export default styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: transparent;
  border: none;
  border-radius: 3px;
`
