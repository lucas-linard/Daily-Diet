import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
export const Container = styled(SafeAreaView)`
    flex: 1;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 0 36px;
` 