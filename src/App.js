import styled from 'styled-components/macro'
import AppHeader from './AppHeader'
import Button from './Button'
import Input from './Input'

export default function App() {
  const ReversedButton = props => (
    <Button {...props} children={props.children.split('').reverse()} />
  )

  /* Styling any component */

  const Link = ({ className, children }) => (
    <a className={className} href="/">
      {children}
    </a>
  )

  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `
  /* END: Styling any component */

  return (
    <StyledApp>
      <AppHeader />
      <Button>Click me!</Button>
      <Button primary>No, Click me!</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      {/* "as" polymorphic prop (example: style button as a link) */}
      <Button as="a" href="/">
        Link
      </Button>
      {/*custom components*/}
      <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button>
      {/* Styling any component */}
      <Link>Unstyled, boring Link</Link>
      <StyledLink>Styled, exciting Link</StyledLink>
      {/* Passed props */}
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  text-align: center;
  display: grid;
  gap: 20px;
`
// Extending Styles

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`
