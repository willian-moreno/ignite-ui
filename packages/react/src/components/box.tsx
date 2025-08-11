import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  borderStyle: 'solid',
  borderColor: '$gray600',
  borderWidth: 1,
  borderRadius: '$md',
  backgroundColor: '$gray800',
  padding: '$4',
})

export type BoxProps = ComponentProps<typeof Box>
