import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY100};
  `}
`;

export const Box = styled.View`
    width: 100%;
    gap: 8px;
`;
