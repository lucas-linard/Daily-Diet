import { Container, Dot, TextContainer } from "./styles";
import { Text } from "@components/Text";

export function Meal() {
  return (
    <Container>
      <Text>20:00</Text>
      <Text color="GRAY400" fontSize="SM">
        |
      </Text>
      <Text style={{ width: "70%" }} color="GRAY200" numberOfLines={1}>
        Vitamina de Banana com morango
      </Text>
      <Dot />
    </Container>
  );
}
