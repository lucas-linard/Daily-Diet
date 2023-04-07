import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealSectionType } from "src/@types/Meal";
import { MEAL_COLLECTION } from "@storage/storageConfig";

const countIsOnDiet = (array: MealSectionType[]) => {
  let totalItems = 0;
  let isOnDietCount = 0;

  array.forEach((item) => {
    totalItems += item.data.length;
    isOnDietCount += item.data.filter((dataItem) => dataItem.isOnDiet === 'YES').length;
  });

  return { totalItems, isOnDietCount };
};


export async function mealGetSuccessPercentage() {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (storedMeals !== null) {
      const storage = JSON.parse(storedMeals);
      // Total items in the array
      const onDietCount = countIsOnDiet(storage);
      return parseFloat(((onDietCount.isOnDietCount / onDietCount.totalItems) * 100).toFixed(2));  
     
    }
  } catch (error) {
    throw error;
  }
}
