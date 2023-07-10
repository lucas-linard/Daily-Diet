import { MealType, MealFormType } from "./Meal";

import { isOnDietSelectType } from "@components/Meal";
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Stats: {
        percent: number;
      };
      Details: MealType;
      MealForm: {
        type : MealFormType,
        meal?: MealType

      };
      Feedback: {
        isOnDiet: isOnDietSelectType;
      };
      Settings: undefined;
    }
  }
}
