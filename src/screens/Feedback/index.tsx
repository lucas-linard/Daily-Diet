import { useNavigation, useRoute } from "@react-navigation/native";
import { Container } from "./styles";

import { Positive, Negative } from "@components/Feedback";
import { Text } from "@components/Text";
import { Button } from "@components/Button";

const PositiveText = () => (
  <>
    <Text fontFamily="BOLD" fontSize="XL2" color="GREEN_DARK">
      Continue assim!
    </Text>
    <Text style={{ textAlign: "center" }}>
      Você continua
      <Text fontFamily="BOLD"> dentro da dieta</Text>. Muito bem!
    </Text>
  </>
);

const NegativeText = () => (
  <>
    <Text fontFamily="BOLD" fontSize="XL2" color="RED_DARK">
      Que pena!
    </Text>
    <Text style={{ textAlign: "center" }}>
      Você
      <Text fontFamily="BOLD"> saiu da dieta </Text>
      dessa vez, mas continue se esforçando e não desista!
    </Text>
  </>
);

export default function Feedback() {
  const route = useRoute();
  const params = route.params as { isOnDiet: string };
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      {params.isOnDiet === "YES" ? <PositiveText /> : <NegativeText />}
      {params.isOnDiet === "YES" ? (
        <Negative style={{ marginTop: 40 }} />
      ) : (
        <Positive style={{ marginTop: 40 }} />
      )}
      <Button
        title="Ir para a página inicial"
        style={{ marginTop: 32 }}
        onPress={handleNavigateToHome}
      />
    </Container>
  );
}
