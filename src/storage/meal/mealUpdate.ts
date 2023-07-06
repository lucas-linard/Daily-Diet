import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import moment from "moment";
import { MealType } from "src/@types/Meal";

type MealStorageType = {
  day: Date;
  data: MealType[];
};

function findIndexes(id: string, data: MealStorageType[]) {
  for (let i = 0; i < data.length; i++) {
    const section = data[i].data;
    for (let j = 0; j < section.length; j++) {
      if (section[j].id === id) {
        return { sectionIndex: i, mealIndex: j };
      }
    }
  }
  return null; // retorna null se o id não for encontrado
}

export async function mealUpdate(meal: MealType) {
  try {
    const storedMealsJSON = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (storedMealsJSON) {
      let storedMeals: MealStorageType[] = JSON.parse(storedMealsJSON);
      const mealSection = meal.date;

      const indexes = findIndexes(meal.id, storedMeals);
      if (indexes) {
        if (
          !moment(storedMeals[indexes.sectionIndex].day).isSame(
            moment(mealSection),
            "day"
          )
        ) {
         
          //deleta o meal ou a section inteira se for o único meal
          storedMeals[indexes.sectionIndex].data.length === 1
            ? storedMeals.splice(indexes.sectionIndex, 1)
            : storedMeals[indexes.sectionIndex].data.splice(
                indexes.mealIndex,
                1
              );

          // encontra o index da section que o meal deve ser inserido
          const indexOfSection = storedMeals.findIndex((item: any) =>
            moment(item.day).isSame(moment(mealSection), "day")
          );
          //se encontrou a section, insere o meal
          if (indexOfSection !== -1) {
            //modificar aqui
            const indexToInsert = storedMeals[indexOfSection].data.findIndex(
              (item) => meal.date.getTime() > new Date(item.date).getTime()
            );
            storedMeals[indexOfSection].data.splice(indexToInsert, 0, meal);
          } else {
            //se não encontrou a section, cria a section e insere o meal
            const indexToInsertSection = storedMeals.findIndex(
              (item) =>
                new Date(meal.date).getTime() > new Date(item.day).getTime()
            );
            if (indexToInsertSection !== -1) {
              storedMeals.splice(indexToInsertSection, 0, {
                day: mealSection,
                data: [meal],
              });
            } else {
              storedMeals.push({ day: mealSection, data: [meal] });
            }
          }
        } else {
          storedMeals[indexes.sectionIndex].data.splice(indexes.mealIndex, 1);

          const indexToInsert = storedMeals[
            indexes.sectionIndex
          ].data.findIndex(
            (item) =>
              new Date(meal.date).getTime() > new Date(item.date).getTime()
          );
          if (indexToInsert !== -1) {
            storedMeals[indexes.sectionIndex].data.splice(
              indexToInsert,
              0,
              meal
            );
          } else {
            storedMeals[indexes.sectionIndex].data.push(meal);
          }
          //storedMeals[indexes.sectionIndex].data[indexes.mealIndex] = meal;
        }
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
