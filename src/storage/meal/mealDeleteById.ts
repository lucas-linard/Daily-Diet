import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealSectionType } from "src/@types/Meal";

const removeMealAndCleanSections = (
  array: MealSectionType[],
  mealId: string
) => {
  return array.reduce<MealSectionType[]>((acc, item) => {
    const newData = item.data.filter((dataItem) => dataItem.id !== mealId);
    if (newData.length > 0) {
      acc.push({ ...item, data: newData });
    }
    return acc;
  }, []);
};

export async function mealDeleteById(id: string) {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (storedMeals !== null) {
      const storage = JSON.parse(storedMeals);

      let newStorage = removeMealAndCleanSections(
        storage,
        id
      );
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newStorage));
    }
  } catch (error) {
    throw error;
  }
}
