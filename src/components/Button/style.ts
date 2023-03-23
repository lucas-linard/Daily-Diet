import styled from "styled-components/native";

import { Pressable } from "react-native";

export type ButtonStyleProps = {
  fullWidth?: boolean;
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

  background-color: ${({ theme }) => theme.COLORS.GRAY200};
`;
