import styled,{ css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type SelectTypeStyleProps = "YES" | "NO";

type ButtonStyleProps = {
    selected: boolean;
    type: SelectTypeStyleProps
}

type CircleStyleProps = {
    type: SelectTypeStyleProps
}

export const Container = styled.View`
    flex: 1;
    flex-direction: row;

    min-height: 50px;
    max-height: 50px;

    gap: 12px;
`

export const Button = styled(TouchableOpacity)<ButtonStyleProps>`
    flex:1;
    flex-direction: row;
    
    align-items: center;
    justify-content: center;

    border: 1px;
    border-radius: 6px;
    
    padding: 16px;
    gap: 8px;

    background-color: ${({theme, selected, type}) => {
        if(selected && type === "YES"){
            return theme.COLORS.GREEN_LIGHT;
        } else if(selected && type === "NO") {
            return theme.COLORS.RED_LIGHT;
        } else {
            return theme.COLORS.GRAY600;
        }
    }};
    border-color: ${({theme, selected, type}) => {
        if(selected && type === "YES"){
            return theme.COLORS.GREEN_DARK;
        } else if(selected && type === "NO") {
            return theme.COLORS.RED_DARK;
        } else {
            return theme.COLORS.GRAY600;
        }
    }};;
`

export const Circle = styled.View<CircleStyleProps>`
    width: 8px;
    height: 8px;

    border-radius: 999px;

    background-color: ${({theme, type}) => type === "YES" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};   
`