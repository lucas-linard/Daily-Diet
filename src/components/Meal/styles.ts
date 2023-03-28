import styled from "styled-components/native";
import { Pressable } from "react-native";


export const Container = styled(Pressable)`
    flex-direction: row;
    align-items: center;

    height: 49px;
    width: 100%;

    padding: 14px 16px;
    gap: 12px;

    border: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY500};
    border-radius: 6px;
`;

export const TextContainer = styled.View`
    width: 70%;
    `;

export const Dot = styled.View`
    position: absolute;
    right: 12px;
    
    width: 14px;
    height: 14px;

    background-color: ${({ theme }) => theme.COLORS.RED_MID};
    border-radius: 999px;

`