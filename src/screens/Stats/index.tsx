import { SharedElement } from "react-navigation-shared-element";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Container, PercentContainer, RowBox, Card } from "./styles";

import { Percent } from "@components/Percent";
import { Text } from "@components/Text";
import { InfoCard } from "@components/InfoCard";

export default function Stats() {
  const insets = useSafeAreaInsets();
  return (
    <Container
      healthy={true}
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
      <PercentContainer>
        <SharedElement id="percent">
          <Percent percent={90.86} showBackButton={true} />
        </SharedElement>
      </PercentContainer>
      <Card>
        <Text fontFamily="BOLD" fontSize="SM">
          Estatísticas gerais
        </Text>
        <InfoCard
          fullwidth
          title="4"
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <InfoCard fullwidth title="109" subtitle="refeições registradas" />
        <RowBox>
          <InfoCard
            type="HEALTHY"
            title="32"
            subtitle="refeições dentro da dieta"
          />
          <InfoCard
            type="UNHEALTHY"
            title="77"
            subtitle="refeições fora da dieta"
          />
        </RowBox>
      </Card>
    </Container>
  );
}
