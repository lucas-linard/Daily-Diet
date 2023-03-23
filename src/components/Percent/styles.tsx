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
  margin-bottom: 40px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const ArrowUp = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;
