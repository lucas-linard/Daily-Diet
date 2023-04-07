import { isOnDietSelectType } from "@components/Meal";

export type  MealType  = {
    id: string;
    title: string;
    description: string;
    isOnDiet: isOnDietSelectType;
    date: Date;
}

export type  MealSectionType  = {
    title: string;
    data: MealType[];
}