import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarProps } from '@willianam-ignite-ui/react'
import { fn } from 'storybook/test'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/willian-moreno.png',
    alt: 'Willian Moreno',
    onLoadingStatusChange: fn(),
  },
  argTypes: {
    src: {
      type: 'string',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
