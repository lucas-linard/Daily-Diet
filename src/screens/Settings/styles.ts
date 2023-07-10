import styled from "styled-components/native";
import { FlatList } from "react-native";



export const Container = styled.SafeAreaView`
flex: 1;
/* justify-content: center; */
align-items: center;
`;

export const Header = styled.View`    
    width: 100%;

    justify-content: center;
    align-items: center;
`;

export const OptionButton = styled.TouchableOpacity`
    height: 50px;
    width: 100%;

    justify-content: center;
    border-bottom-width: 1px;
    
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY400};
`