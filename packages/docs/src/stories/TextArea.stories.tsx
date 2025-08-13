import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Text, TextArea, TextAreaProps } from '@willianam-ignite-ui/react'
import { fn } from 'storybook/test'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    placeholder: 'Type your name',
    disabled: false,
    onInput: fn(),
  },
  argTypes: {
    value: {
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
