export function formattedInReais(value: number) {
  return `R$ ${(value * 0.01).toFixed(2).replace('.', ',')}`
}
