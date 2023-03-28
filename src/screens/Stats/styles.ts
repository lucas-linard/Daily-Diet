import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type ContainerProps = {
  healthy: boolean;
};
export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;

  align-items: center;

  background-color: ${({ theme, healthy }) =>
    healthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const PercentContainer = styled.View`
    width: 100%;
    padding: 0px 24px;
`

export const Card = styled.View`
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 24px;
  margin-top: 20px;

  gap:12px;

  border-radius: 20px;
  
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const RowBox = styled.View`
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    width: 100%;
`
