import { Text } from "@rneui/themed";
import { View } from "react-native";
import { Categories } from "../mock/Categories";

export const CategoryScr = ({ route }) => {
  const { id } = route.params;
  const category = Categories.find((item) => item.id === id);

  return (
    <View>
      <Text>id - {id}</Text>
      <Text>Category - {category.name}</Text>
    </View>
  );
};
