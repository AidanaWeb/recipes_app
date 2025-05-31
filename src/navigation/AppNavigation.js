// import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScr } from "../screens/HomeScr";
import { Text } from "@rneui/themed";
import { DetailScr } from "../screens/DetailsScr";
import { CategoryScr } from "../screens/CategoryScr";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScr}
        options={{
          title: "Главная",
          headerStyle: { backgroundColor: "#1c1e1f" },
          headerTitleStyle: { color: "#fff" },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScr}
        options={{
          title: "Рецепт",
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#1c1e1f" },
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScr}
        options={{
          title: "Категория",
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black" },
        }}
      />
    </Stack.Navigator>
  );
};
