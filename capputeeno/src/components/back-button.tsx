'useClient'

import { styled } from 'styled-components'
import { ArrowBackIcon } from './icons/arrow-back-icon'
import { useRouter } from 'next/navigation'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);
`
interface BtnProps {
  navigate: string
}

export function BackButton({ navigate }: BtnProps) {
  const router = useRouter()
  const handleNavigate = () => {
    router.push(navigate)
  }

  return (
    <Button onClick={handleNavigate}>
      <ArrowBackIcon />
      voltar
    </Button>
  )
}
