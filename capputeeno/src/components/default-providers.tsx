'use client'

import { FilterContextProvider } from '@/context/filter-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface DefaultProviderProps {
  children: ReactNode
}

const theme = {
  desktopBreakepoint: '768px',
}

export function DefaultProviders({ children }: DefaultProviderProps) {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}
