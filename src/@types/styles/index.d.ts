import 'styled-components';
import myTheme from '@/app/styles/theme';

type Theme = typeof myTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
