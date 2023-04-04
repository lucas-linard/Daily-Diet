import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Home from "@screens/Home";
import Stats from "@screens/Stats";
import { MealForm } from "@screens/MealForm";
import Feedback from "@screens/Feedback";
import Details from "@screens/Details";

const { Navigator, Screen } = createSharedElementStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ current }) => ({
          cardStyle: {
            opacity: current.progress,
          },
        }),
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen
        name="Stats"
        component={Stats}
        sharedElements={() => {
          return [
            {
              id: `percent`,
              animation: "fade",
            },
          ];
        }}
      />
      <Screen name="MealForm" component={MealForm} />
      <Screen name="Feedback" component={Feedback} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}
