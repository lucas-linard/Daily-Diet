import styled from "styled-components/native";

import { Pressable } from "react-native";

export type ButtonStyleProps = {
  fullWidth?: boolean;
  active?: boolean;
  type?: "SOLID" | "OUTLINE";

};

export const Wrapper = styled.View`
flex-direction: row;
`

export const Container = styled(Pressable)<ButtonStyleProps>`
  flex: ${({ fullWidth }) => (fullWidth ? 1 : "none")};
  flex-direction: row;

  align-items: center;
  justify-content: center;

  min-height: 50px;
  max-height: 50px;

  border-radius: 6px;
  padding: 16px 24px;
  gap: 12px;

  border: ${({ theme, active, type}) => type === "OUTLINE" ? `1px solid ${theme.COLORS.GRAY100}` : "none" };
  background-color: ${({ theme, active, type }) => { 
   switch (type) {
    case "SOLID":
      return active ? theme.COLORS.GRAY100 : theme.COLORS.GRAY200;
   
    case "OUTLINE":
      return active ? theme.COLORS.GRAY500 : theme.COLORS.WHITE;
   
    default:
      break;
   }
  }};
`;
