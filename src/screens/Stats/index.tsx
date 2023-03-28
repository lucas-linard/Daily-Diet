import { Container, PercentContainer,RowBox ,Card } from "./styles";

import { Percent } from "@components/Percent";
import { Text } from "@components/Text";
import { InfoCard } from "@components/InfoCard";

export default function Stats() {
  return (
    <Container healthy={true}>
      <PercentContainer>
        <Percent percent={40} showBackButton={true} />
      </PercentContainer>
      <Card>
        <Text fontFamily="BOLD" fontSize="SM">
          Estatísticas gerais
        </Text>
        <InfoCard fullwidth title="4" subtitle="melhor sequência de pratos dentro da dieta" />        
        <InfoCard fullwidth title="109" subtitle="refeições registradas" />   
        <RowBox>
        <InfoCard type="HEALTHY" title="32" subtitle="refeições dentro da dieta" />   
        <InfoCard type="UNHEALTHY" title="77" subtitle="refeições fora da dieta" />   
            </RowBox>     
      </Card>
    </Container>
  );
}
