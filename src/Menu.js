import styled from 'styled-components'
import { bool } from 'prop-types'

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <a href="/">About us</a>
      <a href="/">Pricing</a>
      <a href="/">Contact</a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #555;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.7s cubic-bezier(0.42, 0.97, 0.52, 1);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  width: 200px;

  a {
    font-size: 20px;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.5s linear;

    &:hover {
      color: white;
    }
  }
`
