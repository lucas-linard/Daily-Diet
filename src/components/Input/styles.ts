import { TextInput } from 'react-native';
import styled, {css} from 'styled-components/native';

export type TextFieldStyleProps = {
    active: boolean;
    filled: boolean;
    numberOfLines: number;
}

type ContainerProps = {
    numberOfLines: number;
}

export const Container = styled.View<ContainerProps>`
    flex: 1;

    min-height: 70px;
    /* por conta do flex ele esta crescendo o maximo que pode */
    max-height: ${({numberOfLines }) => numberOfLines * 30 + 48}px;;

    gap: 4px;
`

export const TextField = styled(TextInput)<TextFieldStyleProps>`
    width: 100%;
    height: ${({numberOfLines }) => numberOfLines * 30 + 28}px;
    
    border: 1px solid ${({theme}) => theme.COLORS.GRAY500};
    border-radius: 6px;
    padding: 14px;
    gap: 108px;

    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY100};
    `}
    
    ${({theme,  active, filled}) => {
        if(active && !filled || !active && filled){
            return css`
                border-color: ${theme.COLORS.GRAY300};
            `
        } else {
            return css`
                border-color: ${theme.COLORS.GRAY500};
            `
        }
    }

}
    
`