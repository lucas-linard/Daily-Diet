import { Container, Box, ArrowUpRightIcon, BackIcon } from "./styles";

import { Text } from "@components/Text";

type PercentProps = {
  percent: number;
  healthy?: boolean;
  showBackButton?: boolean;
};

export function Percent({
  percent,
  healthy = true,
  showBackButton = false,
}: PercentProps) {
  return (
    <Container healthy={healthy}>
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
