import { useNavigation } from "@react-navigation/native";
import { Button, Image, Text } from "@rneui/themed";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { Recipes } from "../mock/Recipes";
import { Categories } from "../mock/Categories";

export const HomeScr = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: "black", padding: 10 }}>
      <CategoriesButtons />
    </ScrollView>
  );
};

const CategoriesButtons = () => {
  return (
    <View>
      <Text style={{ color: "#fff", fontSize: 20, margin: 10 }}>Категории</Text>
      <View style={{ flexDirection: "column", gap: 20 }}>
        {Categories.map((item) => {
          return <Category id={item.id} item={item} />;
        })}
      </View>
    </View>
  );
};
const Category = ({ item = {} }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        height: 80,
      }}
      onPress={() => navigation.navigate("Category", { id: item.id })}
    >
      <Text style={{ fontSize: 20, marginLeft: 20 }}>{item.name}</Text>
      <Image
        source={{
          uri: item.img,
        }}
        style={{
          width: 150,
          height: 90,
          marginRight: -30,
        }}
        containerStyle={
          item?.mirror
            ? { transform: [{ scaleX: -1 }], marginTop: 10, marginRight: -30 }
            : {}
        }
      />
    </TouchableOpacity>
  );
};
const RecipePreview = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};
