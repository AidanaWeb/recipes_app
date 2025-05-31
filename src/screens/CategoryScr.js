import { Image, Text } from "@rneui/themed";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Categories } from "../mock/Categories";
import { Recipes as mockRecipes } from "../mock/Recipes";
import { useNavigation } from "@react-navigation/native";
import { noPhoto } from "../assets/links";

export const CategoryScr = ({ route }) => {
  const { id } = route.params;
  const category = Categories.find((item) => item.id === id);
  const recipes = mockRecipes.filter((item) => item.category.id == id);

  return (
    <ImageBackground
      source={{ uri: category.coverImg }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <FlatList
        style={{ padding: 10 }}
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipePreview item={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: 20, width: 20 }} />
        )}
        numColumns={3}
      />
    </ImageBackground>
  );
};
const RecipesList = ({ recipes = [] }) => {
  return (
    <View>
      {recipes.map((item) => {
        return <RecipePreview id={item.id} item={item} />;
      })}
    </View>
  );
};
const RecipePreview = ({ item }) => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  const gap = 20;
  const itemWidth = (screenWidth - gap * 2) / 3;
  const itemImage = item.img.includes("example.com") ? noPhoto : item.img;

  const openDetail = (itemId) => {
    navigation.navigate("Detail", { id: itemId });
  };

  return (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => openDetail(item.id)}
    >
      <View
        style={{
          backgroundColor: "#fff",
          height: 190,
          width: itemWidth,
          borderRadius: 10,
          overflow: "hidden",
          padding: 5,
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Image
          source={{
            uri: itemImage,
          }}
          style={{
            width: itemWidth,
            height: itemWidth,
          }}
          containerStyle={{ borderRadius: 10 }}
        />
        <Text numberOfLines={3}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
