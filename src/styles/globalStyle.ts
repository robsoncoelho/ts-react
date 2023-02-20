
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: inherit;
  }
  body {
    font-family: ${props => props.theme.font.family.inter};
  }
`;
 
export default GlobalStyle;