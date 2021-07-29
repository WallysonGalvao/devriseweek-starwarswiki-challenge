import * as theme from '../styles/themes';

type Theme = typeof theme.empire;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
