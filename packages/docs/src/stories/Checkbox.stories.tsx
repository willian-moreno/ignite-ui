import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Checkbox, CheckboxProps, Text } from '@willianam-ignite-ui/react'
import { fn } from 'storybook/test'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
    onCheckedChange: fn(),
  },
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
