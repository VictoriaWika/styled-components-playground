import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  font-size: 112.5%;
  padding: 10px;
  background: #eee;
}
input,
button {
  font-size: inherit;
  padding: 5px;
}
`
