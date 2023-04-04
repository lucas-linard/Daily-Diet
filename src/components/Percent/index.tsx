import { PressableProps } from "react-native";
import { Container, Box, ArrowUpRightIcon, BackIcon } from "./styles";

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
  return (
    <Container healthy={healthy} {...rest}>
      {showBackButton ? (
        <Box>
          <BackIcon healthy={healthy} />
        </Box>
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
