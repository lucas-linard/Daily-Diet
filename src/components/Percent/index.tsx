import { Container, ArrowUp } from "./styles";

import { Text } from "@components/Text";

type PercentProps = {
    percent: number;
    healthy?: boolean;
    showArrow?: boolean;
}

export function Percent({ percent, healthy = true, showArrow = true}: PercentProps) {
    return (
        <Container healthy={healthy}>
            <Text fontSize="XL4" fontFamily="BOLD">{percent}%</Text>
            <Text fontSize="SM">das refeições dentro da dieta</Text>
            {showArrow && <ArrowUp healthy={healthy}/>}
        </Container>
    );
}