import { useState } from 'react'
import styled from 'styled-components/macro'
import Burger from './Burger'
import items from './continent.json'
import Menu from './Menu'
import ContinentFilter from './ContinentFilter'

export default function App() {
  const [open, setOpen] = useState(false)

  const all = items
  const [filteredContinents, setFilteredContinents] = useState('all')

  return (
    <StyledApp>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <ContinentFilter
        setFilteredContinents={setFilteredContinents}
        filteredContinents={filteredContinents}
      />
      {all
        .filter(
          item =>
            filteredContinents === 'all' ||
            item.continent === filteredContinents
        )
        .map(({ continent, locations }) => (
          <>
            <h2>{continent}</h2>
            <div>
              {locations.map(location => (
                <p>{location}</p>
              ))}
            </div>
          </>
        ))}
    </StyledApp>
  )
}

const StyledApp = styled.div`
  text-align: center;
  display: grid;
  gap: 20px;
`
