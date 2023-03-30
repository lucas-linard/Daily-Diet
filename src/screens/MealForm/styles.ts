import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
  flex: 1;

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY500};
`;

export const Card = styled.View`
  flex: 1;
  width: 100%;

  gap: 24px;
  padding: 24px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const RowBox = styled.View`
    flex-direction: row;
    width: 100%;
    gap: 28px;
`

export const EndBox = styled.View`
  flex: 1;

  align-items: center;
  justify-content: flex-end;

  margin-bottom: 20px;
`