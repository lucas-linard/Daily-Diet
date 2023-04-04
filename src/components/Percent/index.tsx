import { PressableProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Box,
  ArrowUpRightIcon,
  BackIcon,
  BackButton,
} from "./styles";

import { Text } from "@components/Text";

type PercentProps = PressableProps & {
  percent: number;
  healthy?: boolean;
  showBackButton?: boolean;
};

export function Percent({
  percent,
  healthy = true,
  showBackButton = false,
  ...rest
}: PercentProps) {
  const navigation = useNavigation();
  return (
    <Container healthy={healthy} {...rest}>
      {showBackButton ? (
          <BackButton onPress={navigation.goBack}>
            <BackIcon healthy={healthy} />
          </BackButton>
      ) : (
        <ArrowUpRightIcon healthy={healthy} />
      )}
      <Text fontSize="XL4" fontFamily="BOLD">
        {percent}%
      </Text>
      <Text fontSize="SM">das refeições dentro da dieta</Text>
    </Container>
  );
}
