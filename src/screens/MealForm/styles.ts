import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MealFormType } from "src/@types/Meal";

type containerProps = {
  type: MealFormType;
}

export const Container = styled(SafeAreaView)<containerProps>`
  flex: 1;

  align-items: center;

  background-color: ${({ theme, type }) => {
    switch (type) {
      case "NEW":
        return theme.COLORS.GRAY500;
      case "EDIT-ON-DIET":
        return theme.COLORS.GREEN_LIGHT;
      case "EDIT-OFF-DIET":
        return theme.COLORS.RED_LIGHT;
    }
  }};
`;

export const Card = styled.View`
  flex: 1;
  width: 100%;

  gap: 24px;
  padding: 24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const RowBox = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 28px;
`;

export const EndBox = styled.View`
  flex: 1;

  align-items: center;
  justify-content: flex-end;

  margin-bottom: 20px;
`;
