import { Container, ArrowUp } from "./styles";
import { Text } from "@components/Text";


export function Percent() {
    return (
        <Container>
            <Text fontSize="XL4" fontFamily="BOLD">90,86%</Text>
            <Text fontSize="SM">das refeições dentro da dieta</Text>
            <ArrowUp />
        </Container>
    );
}