import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@screens/Home";
import Stats from "@screens/Stats";
import { MealForm } from "@screens/MealForm";
import  Feedback  from "@screens/Feedback";
import Details from "@screens/Details";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Stats" component={Stats} />
        <Screen name="MealForm" component={MealForm} />
        <Screen name="Feedback" component={Feedback} />
        <Screen name="Details" component={Details} />
      </Navigator>
    );
  }