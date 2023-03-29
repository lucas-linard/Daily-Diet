import { TextInput } from 'react-native';
import styled, {css} from 'styled-components/native';

export type TextFieldStyleProps = {
    active: boolean;
    filled: boolean;
}

export const Container = styled.View`
    flex: 1;

    min-height: 70px;
    max-height: 70px;

    gap: 4px;
`

export const TextField = styled(TextInput)<TextFieldStyleProps>`
    width: 100%;

    border: 1px solid ${({theme}) => theme.COLORS.GRAY500};
    border-radius: 6px;
    padding: 14px;
    gap:8px;

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