import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealType } from "src/@types/Meal";

export async function mealCreate(meal: MealType) {
   
  try {
    let storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (storedMeals !== null) {
      // value previously stored

      const storage = JSON.parse(storedMeals);

      const mealSection = meal.date.toLocaleDateString("pt-BR");

      const indexOfSection = storage.findIndex(
        (item: any) => item.title === mealSection
      );
  
      if (indexOfSection !== -1) {
        storage[indexOfSection].data.push(meal);
        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
      } else {
        storage.push({ title: mealSection, data: [meal] });
        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
      }
    } else {
      // first time storing
      const mealSection = meal.date.toLocaleDateString("pt-BR");
      await AsyncStorage.setItem(
        MEAL_COLLECTION,
        JSON.stringify([{ title: mealSection, data: [meal] }])
      );
    }
  } catch (error) {
    throw error;
  }
}
