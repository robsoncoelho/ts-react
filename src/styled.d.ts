// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: {
        inter: string
        jetBrains: string
      },
      size: {
        small: string
        regular: string
        medium: string
        large: string
      }
    }
    breakpoints: {
      mobile: string
    },
    color: {
      gold:string,
      goldLight:string,
      blue:string,
      blueLight:string,
      navy:string,
      red:string,
      white:string,
      grayDark:string,
      grayLight:string
      grayLighter:string
    } 
  }
}
