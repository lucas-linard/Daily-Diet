import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 35.89px;
`
export const Profile = styled.Image`
    width: 40px;
    height: 40px;

    border-radius: 999px;
    border-color: ${({ theme }) => theme.COLORS.GRAY300};
    border-width: 2px;
    `

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY100};
  `}
`;

export const Box = styled.View`
    width: 100%;
    gap: 8px;
`;

export const IconButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
   
    justify-content: center;
    align-items: center;
    `;