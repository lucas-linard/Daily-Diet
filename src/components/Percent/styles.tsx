import styled, { css } from "styled-components/native";
import { IconProps } from "phosphor-react-native";
import { ArrowUpRight } from "phosphor-react-native";
import { Pressable } from "react-native";


type PercentProps = {
  healthy?: boolean;
};

type ArrowUpProps = IconProps & {
healthy?: boolean;
};
 
export const Container = styled(Pressable)<PercentProps>`
  width: 100%;
  justify-content: center;
  align-items: center;

  min-height: 102px;
  max-height: 102px;

  padding: 20px 16px;
  gap: 2px;
  margin-bottom: 40px;

  border-radius: 8px;

  background-color: ${({ theme, healthy }) =>
    healthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ArrowUp = styled(ArrowUpRight).attrs<ArrowUpProps>(({ theme, healthy }) => ({
  color: healthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24,
}))<ArrowUpProps>`
  position: absolute;
  top: 8px;
  right: 8px;
`;
