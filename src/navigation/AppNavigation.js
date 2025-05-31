// import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScr } from "../screens/HomeScr";
import { Text } from "@rneui/themed";
import { DetailScr } from "../screens/DetailsScr";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScr}
        options={{
          title: "Главная",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScr}
        options={{
          title: "Рецепт",
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};
