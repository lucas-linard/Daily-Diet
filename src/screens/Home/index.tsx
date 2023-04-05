import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Container, Header, Profile, Box, List } from "./styles";

import ProfileImage from "@assets/Profile.png";
import { Text } from "@components/Text";
import { Logo } from "@components/Logo";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { SectionList } from "react-native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const mockedData = [
  {
    title: "12.08.22",
    data: [
      {
        id: "1",
        title: "Café da manhã",
        description: "Café, pão com manteiga e queijo",
        hora: "08:00",
      },
      {
        id: "2",
        title: "Café da manhã",
        description: "Café, pão com manteiga e queijo",
        hora: "08:00",
      },
      {
        id: "3",
        title: "Café da manhã",
        description: "Café, pão com manteiga e queijo",
        hora: "08:00",
      },
      {
        id: "4",
        title: "Café da manhã",
        description: "Café, pão com manteiga e queijo",
        hora: "08:00",
      },
      {
        id: "5",
        title: "Café da manhã",
        description: "Café, pão com manteiga e queijo",
        hora: "08:00",
      },
      {
        id: "6",
        title: "Café da manhã",
        description: "Café, pão com manteiga e queijo",
        hora: "08:00",
      },
      {
        id: "7",
        title: "Café da manhã",
        description: "Café, pão com manteiga e queijo",
        hora: "08:00",
      },
      {
        id: "8",
        title: "Café da manhã",
        description: "Café, pão com manteiga e queijo",
        hora: "08:00",
      },
      {
        id: "9",
        title: "Café da manhã",
        description: "Café, pão com manteiga e queijo",
        hora: "08:00",
      },
      {
        id: "10",
        title: "Café da manhã",
        description: "Café, pão com manteiga e queijo",
        hora: "08:00",
      },
    ],
  },
];

export default function Home() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const windowHeight = Dimensions.get("window").height;

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
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left + 24,
        paddingRight: insets.right + 24,
        paddingBottom: insets.bottom,
      }}
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
        {/* <Text fontFamily="BOLD" fontSize="LG">
          12.08.22
        </Text> */}
      </Box>
      <MaskedView
        maskElement={
          <LinearGradient
            start={{ x: 0.0, y: 0.3 }}
            end={{ x: 0.0, y: 1 }}
            colors={["#FFFFFF", "#FFFFFF00", "#FFFFFF00"]}
            style={{ flex: 1 }}
          />
        }
      >
        <List
          sections={mockedData}
          renderSectionHeader={() => (
            <Text fontFamily="BOLD" fontSize="LG">
              12.08.22
            </Text>
          )}
          renderItem={({ item }) => <Meal onPress={handleNavigateToDetails} />}
        />
      </MaskedView>
    </Container>
  );
}
