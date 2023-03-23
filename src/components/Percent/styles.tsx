import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  min-height: 102px;
  max-height: 102px;

  padding: 20px 16px;
  gap: 2px;
  margin-bottom: 142px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL4}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY100};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY100};
  `}
`;

export const ArrowUp = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;
