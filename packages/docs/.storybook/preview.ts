import { globalCss } from '@ignite-ui/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/react-vite'
import { themes } from 'storybook/theming'

const globalStyles = globalCss({
  ':root': {
    '--sb-background-color-theme': '#1b1c1d',
  },

  'html.light': {
    '--sb-background-color-theme': '#ffffff',
  },

  html: {
    'background-color': 'var(--sb-background-color-theme)',
  },
})

globalStyles()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: { disable: true },

    docs: {
      theme: themes.dark,
    },
  },

  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],

  tags: ['autodocs'],
}

export default preview
