import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
export const Container = styled(SafeAreaView)`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  flex-direction: row;

  margin-bottom: 24px;
`;

export const OptionButton = styled.TouchableOpacity`
  height: 50px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;


`;

export const IconButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
   
    justify-content: center;
    align-items: center;
    `;