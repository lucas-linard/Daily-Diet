import { Container } from "./styles";
import { ContainerStyleProps } from "./styles";

import { Text } from "@components/Text";

type ContainerProps = ContainerStyleProps & {
    title: number | string;
    subtitle: string;
}

export function InfoCard({ title, subtitle,type= 'REGULAR' ,...rest }: ContainerProps) {    

    return (
        <Container type={type} {...rest}>
            <Text fontSize="XL2" fontFamily="BOLD">{title}</Text>
            <Text fontSize="SM">{subtitle}</Text>
        </Container>
    )
}