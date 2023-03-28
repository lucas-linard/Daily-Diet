import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { Pressable } from "react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
  margin-bottom: 24px;
`;

//for some reason width: auto is taking all the space
export const BackButton = styled(Pressable)`
  position: absolute;
  left: 24px;
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => {
  return {
    size: 24,
    color: theme.COLORS.GRAY100,
  };
})``;
