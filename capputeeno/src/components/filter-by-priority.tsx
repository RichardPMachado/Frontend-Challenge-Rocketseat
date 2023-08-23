import { styled } from 'styled-components'
import { ArrowIcon } from './icons/arrow-icon'
import { useState } from 'react'
import { useFilter } from '@/hooks/useFilter'
import { PriorityTypes } from '@/types/priority-types'

// interface FilterByPriorityProps {}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-size: 0px;
    font-weight: 400;
    line-height: 18px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${(props) => props.theme.tabletBreakpoint}) {
      font-size: 14px;
      line-height: 22px;
    }

    svg {
      margin-top: 7px;
      margin-left: 5px;

      @media (min-width: 371px) {
        margin-left: 16px;
        margin-top: 0px;
      }
    }
  }
`

const PriorityFilter = styled.ul`
  position: absolute;
  width: 250px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  z-index: 999;

  list-style: none;

  top: 100%;
  right: 8px;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`
export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleOpen = () => setIsOpen((prev) => !prev)

  const handlePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }
  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handlePriority(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handlePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handlePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handlePriority(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  )
}
