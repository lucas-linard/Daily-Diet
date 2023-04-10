export type MealFormType = "NEW" | "EDIT-ON-DIET" | "EDIT-OFF-DIET";
export type isOnDietSelectType = 'YES' | 'NO';

export type MealType = {
  id: string;
  name: string;
  description: string;
  isOnDiet: isOnDietSelectType;
  date: Date;
};

export type MealSectionType = {
  title: string;
  data: MealType[];
};
