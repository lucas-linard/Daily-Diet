import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealType } from "src/@types/Meal";

type MealStorageType = {
  title: string;
  data: MealType[];
};

export async function mealUpdate(meal: MealType) {
  console.log(meal);
  try {
    const storedMealsJSON = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (storedMealsJSON) {
      const storedMeals: MealStorageType[] = JSON.parse(storedMealsJSON);

      const mealSection = meal.date.toLocaleDateString("pt-BR");
      const indexOfSection = storedMeals.findIndex(
        (section: MealStorageType) => section.title === mealSection
      );
      if (indexOfSection !== -1) {
        const indexOfMeal = storedMeals[indexOfSection].data.findIndex(
          (item: MealType) => item.id === meal.id
        );
        storedMeals[indexOfSection].data[indexOfMeal] = meal;
        await AsyncStorage.setItem(
          MEAL_COLLECTION,
          JSON.stringify(storedMeals)
        );
      }
     }
  } catch (error) {
    throw error;
  }
}
