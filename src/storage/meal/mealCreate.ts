import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealType } from "src/@types/Meal";

type MealStorageType = {
  title: string;
  data: MealType[];
};
export async function mealCreate(meal: MealType) {
  try {
    let storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (storedMeals !== null) {
      // value previously stored
      const storage: MealStorageType[] = JSON.parse(storedMeals);

      const mealSection = meal.date.toLocaleDateString("pt-BR");

      const indexOfSection = storage.findIndex(
        (item: any) => item.title === mealSection
      );

      if (indexOfSection !== -1) {
        const indexToInsert = storage[indexOfSection].data.findIndex(
          (item) => meal.date.getTime() > new Date(item.date).getTime()
        );
        if (indexToInsert === -1) {
          storage[indexOfSection].data.push(meal);
        } else {
          storage[indexOfSection].data.splice(indexToInsert, 0, meal);
        }
        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
      } else {
        const indexToInsertSection = storage.findIndex(
          (item) =>
            new Date(meal.date).getTime() >
            new Date(
              item.title.split("/").reverse().join("-") + "T00:00:00-03:00"
            ).getTime()
        );
        if (indexToInsertSection !== -1) {
          storage.splice(indexToInsertSection, 0, {
            title: mealSection,
            data: [meal],
          });
        } else {
          storage.push({ title: mealSection, data: [meal] });
        }
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
