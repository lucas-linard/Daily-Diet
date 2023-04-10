import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealSectionType } from "src/@types/Meal";

export type MealCount = {
  onDiet: number;
  offDiet: number;
  streak: number;
  bestStreak: number;
};

function scanMeals(array: MealSectionType[]) {
  const initialCount: MealCount = {
    onDiet: 0,
    offDiet: 0,
    streak: 0,
    bestStreak: 0,
  };

  return array.reduce<MealCount>((acc, item) => {
    item.data.forEach(({ isOnDiet }) => {
      if (isOnDiet === "YES") {
        acc.onDiet++;
        acc.streak++;
        if (acc.streak > acc.bestStreak) {
          acc.bestStreak = acc.streak;
        }
      } else {
        acc.offDiet++;
        acc.streak = 0;
      }
    });
    return acc;
  }, initialCount);
}

export async function mealGetStats() {
  const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
  if (storedMeals !== null) {
    const storage = JSON.parse(storedMeals);
    return scanMeals(storage);
  } else {
    return {
      onDiet: 0,
      offDiet: 0,
      streak: 0,
      bestStreak: 0,
    };
  }
}
