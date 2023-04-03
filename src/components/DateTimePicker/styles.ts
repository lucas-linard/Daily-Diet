import { Pressable, PressableProps } from "react-native";
import styled, { css } from "styled-components/native";

export type TextFieldStyleProps = {
  active: boolean;
  filled: boolean;
  numberOfLines: number;
};

export const Container = styled.View`
  flex: 1;

  min-height: 70px;
  /* por conta do flex ele esta crescendo o maximo que pode */
  max-height: 70px;

  gap: 4px;
`;

export const Button = styled(Pressable)<PressableProps>`
  justify-content: center;
  width: 100%;
  height: 58px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY500};
  border-radius: 6px;
  padding: 14px;
  gap: 108px;
`;
