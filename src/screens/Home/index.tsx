import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { useTheme } from "styled-components/native";
import { SectionList } from "react-native";
import { useTranslation } from "react-i18next";

import { Container, Header, Profile, Box } from "./styles";

import { mealFindAll } from "@storage/meal/mealFindAll";
import { mealGetSuccessPercentage } from "@storage/meal/mealGetSuccessPercentage";
import ProfileImage from "@assets/Profile.png";
import { Text } from "@components/Text";
import { Logo } from "@components/Logo";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { useState, useCallback } from "react";
import moment from "moment";
import { Banner } from "@components/Banner";

export default function Home() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { COLORS } = useTheme();
  const [meals, setMeals] = useState([]);
  const [percentage, setPercentage] = useState(0);

  function handleNavigateToStats() {
    navigation.navigate("Stats", { percent: percentage });
  }

  function handleNavigateToDetails(item: any) {
    navigation.navigate("Details", item);
  }

  function handleNewMeal() {
    navigation.navigate("MealForm", { type: "NEW" });
  }
  async function fetchMeals() {
    try {
      const data = await mealFindAll();
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchPercentage() {
    try {
      const data = await mealGetSuccessPercentage();
      console.log(data);
      setPercentage(data ?? 0);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
      fetchPercentage();
    }, [])
  );

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
      {percentage != -1 ? (
        <SharedElement style={{ width: "100%" }} id="percent">
          <Percent
            subtitle={t("Common:OnDietPercentage")}
            percent={percentage}
            onPress={handleNavigateToStats}
          />
        </SharedElement>
      ) : (
        <Banner title={t('Common:Welcome')} />
      )}

      <Box style={{ marginTop: 40 }}>
        <Text>{t("Common:Meals")}</Text>
        <Button
          title={t("Common:NewMeal")}
          Icon="Plus"
          fullWidth
          onPress={handleNewMeal}
        />
      </Box>
      <Box style={{ marginTop: 32 }}></Box>
      <MaskedView
        maskElement={
          <LinearGradient
            start={{ x: 0.0, y: 0.8 }}
            end={{ x: 0.0, y: 1 }}
            colors={[COLORS.WHITE, "#FFFFFF00"]}
            style={{ flex: 1 }}
          />
        }
        style={{ flex: 1 }}
      >
        <SectionList
          sections={meals}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({ section: { day } }) => (
            <Text fontFamily="BOLD" fontSize="LG" style={{ marginBottom: 8 }}>
              {moment(day).format("LL")}
            </Text>
          )}
          ItemSeparatorComponent={() => <Box style={{ height: 8 }} />}
          renderItem={({ item }) => (
            <Meal
              title={item.name}
              date={item.date}
              isOnDiet={item.isOnDiet}
              onPress={() => handleNavigateToDetails(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={{ textAlign: "center" }}>
              {t("Feedback:NoMealsYet")}
            </Text>
          )}
        />
      </MaskedView>
    </Container>
  );
}
