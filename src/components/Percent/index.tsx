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
  showBackButton?: boolean;
};

export function Percent({
  percent,
  showBackButton = false,
  ...rest
}: PercentProps) {
  const navigation = useNavigation();
  const isHealthy = percent >= 65;
  return (
    <Container healthy={isHealthy} {...rest}>
      {showBackButton ? (
          <BackButton onPress={navigation.goBack}>
            <BackIcon healthy={isHealthy} />
          </BackButton>
      ) : (
        <ArrowUpRightIcon healthy={isHealthy} />
      )}
      <Text fontSize="XL4" fontFamily="BOLD">
        {percent}%
      </Text>
      <Text fontSize="SM">das refeições dentro da dieta</Text>
    </Container>
  );
}
