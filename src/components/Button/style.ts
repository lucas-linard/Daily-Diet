import styled from "styled-components/native";

import { Pressable } from "react-native";

export type ButtonStyleProps = {
  fullWidth?: boolean;
  active?: boolean;
  type?: "SOLID" | "OUTLINE";

};


export const Container = styled(Pressable)<ButtonStyleProps>`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: 50px;

  border-radius: 6px;
  padding: 16px 24px;
  gap: 12px;

  background-color: ${({ theme, active, type }) => { 
   switch (type) {
    case "SOLID":
      return active ? theme.COLORS.GRAY100 : theme.COLORS.GRAY200;
   
    case "OUTLINE":
      return active ? theme.COLORS.WHITE : theme.COLORS.GRAY500;
   
    default:
      break;
   }
  }};
`;
