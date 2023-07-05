import { useNavigation, useRoute } from "@react-navigation/native";
import { Container } from "./styles";

import { Positive, Negative } from "@components/Feedback";
import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { useTranslation } from "react-i18next";

export default function Feedback() {
  const route = useRoute();
  const params = route.params as { isOnDiet: string };
  const navigation = useNavigation();
  const { t } = useTranslation();

  function handleNavigateToHome() {
    navigation.navigate("Home");
  }

  const PositiveText = () => (
    <>
      <Text fontFamily="BOLD" fontSize="XL2" color="GREEN_DARK">
        {t("Feedback:Positive.Title")}
      </Text>
      <Text style={{ textAlign: "center" }}>
        {t("Feedback:Positive.Message")}
        <Text fontFamily="BOLD"> {t("Feedback:Positive.BoldMessage")}</Text>.{" "}
        {t("Feedback:Positive.Message2")}
      </Text>
    </>
  );

  const NegativeText = () => (
    <>
      <Text fontFamily="BOLD" fontSize="XL2" color="RED_DARK">
        {t("Feedback:Negative.Title")}
      </Text>
      <Text style={{ textAlign: "center" }}>
        {t("Feedback:Negative.Message")}
        <Text fontFamily="BOLD"> {t("Feedback:Negative.BoldMessage")}</Text>.{" "}
        {t("Feedback:Negative.Message2")}
      </Text>
    </>
  );

  return (
    <Container>
      {params.isOnDiet === "YES" ? <PositiveText /> : <NegativeText />}
      {params.isOnDiet === "YES" ? (
        <Positive width={224} height={288} style={{ marginTop: 40 }} />
      ) : (
        <Negative width={224} height={288} style={{ marginTop: 40 }} />
      )}
      <Button
        title={t("Button:GoToHomePage")}
        style={{ marginTop: 32 }}
        onPress={handleNavigateToHome}
      />
    </Container>
  );
}
