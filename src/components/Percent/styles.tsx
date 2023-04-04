import styled, { css } from "styled-components/native";
import { Pressable } from "react-native";
import { IconProps } from "phosphor-react-native";
import { ArrowUpRight } from "phosphor-react-native";
import { ArrowLeft } from "phosphor-react-native";



type PercentProps = {
  healthy?: boolean;
  showBackButton?: boolean;
};

type ArrowUpProps = IconProps & {
healthy?: boolean;
};
 
export const Container = styled(Pressable)<PercentProps>`
  width: 100%;
  align-items: center;
  justify-content: ${({ showBackButton }) => showBackButton ? 'flex-start' : 'center'};

  min-height: 102px;
  max-height: 102px;

  gap: 2px;
  
  border-radius: 8px;

  background-color: ${({ theme, healthy }) =>
    healthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Box = styled.View`
  width: 100%;
  flex-direction: row;
`

export const BackButton = styled(Pressable)`
  position: absolute;
  top: 0px;
  left: 0px;
  
  width: auto;
  height: auto;

`

export const BackIcon = styled(ArrowLeft).attrs<ArrowUpProps>(({ theme, healthy }) => ({
  color: healthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24,
}))<ArrowUpProps>``;

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs<ArrowUpProps>(({ theme, healthy }) => ({
  color: healthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24,
}))<ArrowUpProps>`
  position: absolute;
  top: 8px;
  right: 8px;
`;