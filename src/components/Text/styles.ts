import styled, { css, } from "styled-components/native";
import theme from "../../theme";

export type ContentProps = {
    fontSize?: keyof typeof theme.FONT_SIZE;
    fontFamily?: keyof typeof theme.FONT_FAMILY;
    color?: keyof typeof theme.COLORS;
}

export const Content = styled.Text<ContentProps>`
  ${({ fontSize,fontFamily, color }) => css`
    font-size: ${theme.FONT_SIZE[fontSize || 'MD']}px;
    font-family: ${theme.FONT_FAMILY[fontFamily || "REGULAR"]};
    color: ${theme.COLORS[color || "GRAY100"]};
  `}
`;