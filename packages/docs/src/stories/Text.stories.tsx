import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text, type TextProps } from '@willianam-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    as: 'p',
    children: 'Lorem ipsum is placeholder text',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    as: {
      control: 'inline-radio',
      options: [
        'p',
        'span',
        'b',
        'strong',
        'i',
        'em',
        'mark',
        'small',
        'sub',
        'sup',
        'blockquote',
        'q',
        'code',
        'pre',
      ],
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
