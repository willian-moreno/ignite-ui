import { createStitches, defaultThemeMap } from '@stitches/react'
import * as tokens from '@willianam-ignite-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    borderWidth: 'space',
  },
  theme: {
    colors: tokens.colors,
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    fonts: tokens.fonts,
    lineHeights: tokens.lineHeights,
    radii: tokens.radii,
    space: tokens.space,
  },
})
