import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@willianam-ignite-ui/react'
import { fn } from 'storybook/test'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    value: '',
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
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'github.com/',
    placeholder: 'your-username',
  },
}
