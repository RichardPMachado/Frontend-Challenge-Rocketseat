'use client'

import { styled } from 'styled-components'
// eslint-disable-next-line camelcase
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWithSearchIcon } from './primary-input'
import { CartControl } from './cart-control'
import { useFilter } from '@/hooks/useFilter'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${(props) => props.theme.tabletBreakpoint}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 90px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`
export function Header() {
  const { search, setSearch } = useFilter()
  return (
    <TagHeader>
      <Logo className={sairaStencil.className} href={'/'}>
        Capputeeno
      </Logo>
      <div>
        <PrimaryInputWithSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  )
}
