import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealFindAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
}
