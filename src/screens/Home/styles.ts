import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;
  
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`