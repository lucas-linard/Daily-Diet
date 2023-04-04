import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
 import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Container, Header, Profile, Box } from "./styles";

import ProfileImage from "@assets/Profile.png";
import { Text } from "@components/Text";
import { Logo } from "@components/Logo";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
export default function Home() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  function handleNavigateToStats() {
    navigation.navigate("Stats");
  }

  function handleNavigateToDetails() {
    navigation.navigate("Details");
  }

  function handleNewMeal() {
    navigation.navigate("MealForm");
  }

  return (
    <Container
    style={{  paddingTop: insets.top,
      paddingLeft: insets.left + 24,
      paddingRight: insets.right + 24,
      paddingBottom: insets.bottom}}
    >
      <Header>
        <Logo />
        <Profile source={ProfileImage} />
      </Header>
      <SharedElement style={{ width: "100%" }} id="percent">
        <Percent percent={90.86} onPress={handleNavigateToStats} />
      </SharedElement>
      <Box style={{ marginTop: 40 }}>
        <Text>Refeições</Text>
        <Button
          title="Nova refeição"
          Icon="Plus"
          fullWidth
          onPress={handleNewMeal}
        />
      </Box>
      <Box style={{ marginTop: 32 }}>
        <Text fontFamily="BOLD" fontSize="LG">
          12.08.22
        </Text>
      </Box>
      <Meal onPress={handleNavigateToDetails} />
    </Container>
  );
}
