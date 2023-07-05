import { Text } from "@components/Text";
import { Box, Container } from "./styles";
import { Negative, Positive } from "@components/Feedback";

type BannerProps = {
    title: string;
}

export function Banner({ title }: BannerProps) {
  return (
    <Container>
      <Box>
        <Positive />
      </Box>
      <Box>
        <Text fontSize="XL2" fontFamily="BOLD" color="GREEN_DARK">
        {title}
        </Text>
      </Box>
    </Container>
  );
}
