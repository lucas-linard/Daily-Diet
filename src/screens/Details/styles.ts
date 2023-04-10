import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { isOnDietSelectType } from "src/@types/Meal";
import { MealFormType } from "src/@types/Meal";
type ContainerStyleProps = {
  type: MealFormType;
};

type DotStyleProps = {
  isOnDiet: isOnDietSelectType;
};
export const Container = styled(SafeAreaView)<ContainerStyleProps>`
  flex: 1;

  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "EDIT-ON-DIET" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Card = styled.View`
  flex: 1;
  width: 100%;

  gap: 24px;
  padding: 24px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerItem = styled.View`
  width: 100%;

  gap: 8px;
`;

export const Tag = styled.View`
  flex-direction: row;
  height: 34px;
  width: 144px;

  gap: 8px;
  padding: 8px 16px;

  border-radius: 1000px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY600};
`;

export const Dot = styled.View<DotStyleProps>`
  height: 8px;
  width: 8px;
  border-radius: 1000px;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet === "YES" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const EndBox = styled.View`
  flex: 1;

  align-items: center;
  justify-content: flex-end;

  gap: 9px;
  margin-bottom: 20px;
`;
