import { useState } from "react";
import { SharedElement } from "react-navigation-shared-element";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useCallback } from "react";

import { Container, PercentContainer, RowBox, Card } from "./styles";

import { mealGetStats, MealCount as MealStats } from "@storage/meal/mealGetStats";
import { useRoute } from "@react-navigation/native";
import { Percent } from "@components/Percent";
import { Text } from "@components/Text";
import { InfoCard } from "@components/InfoCard";

type RouteParams = {
  percent: number;
};

export default function Stats() {
  const route = useRoute();
  const { percent } = route.params as RouteParams;
  const [stats, setStats] = useState<MealStats>({} as MealStats);
  const insets = useSafeAreaInsets();
  const isHealthy = percent >= 65;
  async function GetStats() {
    try {
      const data = await mealGetStats();
      setStats(data);
    } catch (error) {
     // console.log(error);
    }
  }
  useEffect(
    useCallback(() => {
      GetStats();
    }, [])
  );

  return (
    <Container
      healthy={isHealthy}
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
      <PercentContainer>
        <SharedElement id="percent">
          <Percent percent={percent} showBackButton={true} />
        </SharedElement>
      </PercentContainer>
      <Card>
        <Text fontFamily="BOLD" fontSize="SM">
          Estatísticas gerais
        </Text>
        <InfoCard
          fullwidth
          title={stats.bestStreak}
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <InfoCard fullwidth title={stats.onDiet + stats.offDiet} subtitle="refeições registradas" />
        <RowBox>
          <InfoCard
            type="HEALTHY"
            title={stats.onDiet}
            subtitle="refeições dentro da dieta"
          />
          <InfoCard
            type="UNHEALTHY"
            title={stats.offDiet}
            subtitle="refeições fora da dieta"
          />
        </RowBox>
      </Card>
    </Container>
  );
}
