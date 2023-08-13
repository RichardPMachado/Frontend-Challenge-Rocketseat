'use client'

import { useProducts } from '@/hooks/useProducts'

// interface ProductsListProps {}
export function ProductsList() {
  const { data } = useProducts()
  console.log(data, 'now')

  return <></>
}
