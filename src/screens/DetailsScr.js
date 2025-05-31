import { Text } from "@rneui/themed";
import { View } from "react-native";

export const DetailScr = ({ route }) => {
  const { id } = route.params;

  return (
    <View>
      <Text>Detail screen {id}</Text>
    </View>
  );
};
