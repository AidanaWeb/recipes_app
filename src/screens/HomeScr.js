import { useNavigation } from "@react-navigation/native";
import { Button, Image, Text, Input, Icon } from "@rneui/themed";
import {
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Recipes } from "../mock/Recipes";
import { Categories } from "../mock/Categories";
import { noPhoto } from "../assets/links";
import { THEME } from "../AppSettings";

export const HomeScr = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: THEME.mainBlackColor }}>
      <View>
        <SearchInput />
        <SystemButtons />
      </View>

      <View>
        <ScrollView
          style={{ backgroundColor: THEME.mainBlackColor, padding: 10 }}
        >
          <RecipesPreview />
          <CategoriesButtons />
          <View style={{ marginBottom: 150, marginTop: 30 }}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                marginLeft: 10,
                marginBottom: 10,
              }}
            >
              Рецепт дня
            </Text>
            <RecipeOfTheDay />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const SearchInput = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <Input
        inputContainerStyle={{
          backgroundColor: "#272929",
          borderRadius: 20,
          borderBottomWidth: 0,
        }}
        inputStyle={{
          color: "#fff",
        }}
        leftIconContainerStyle={{ marginHorizontal: 10 }}
        leftIcon={<Icon name="search" type="ion-icon" color="white" />}
      />
    </View>
  );
};
const SystemButtons = () => {
  return (
    <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
      <Button
        title={"Избранное"}
        titleStyle={{ fontSize: 14 }}
        containerStyle={{ flex: 1 }}
        buttonStyle={{
          backgroundColor: "transparent",
          color: "white",
          paddingVertical: 2,
        }}
      />
      <Button
        title={"Популярные"}
        titleStyle={{ fontSize: 14 }}
        containerStyle={{ flex: 1 }}
        buttonStyle={{
          backgroundColor: "transparent",
          color: "white",
          paddingVertical: 2,
        }}
      />
      <Button
        title={"Легкие"}
        titleStyle={{ fontSize: 14 }}
        containerStyle={{ flex: 1 }}
        buttonStyle={{
          backgroundColor: "transparent",
          color: "white",
          paddingVertical: 2,
        }}
      />
    </View>
  );
};
const RecipesPreview = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
        Популярные
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 10,
        }}
      >
        {Recipes.map((item) => {
          if (item.id <= 10) {
            return <RecipeCard id={item.id.toString()} item={item} />;
          }
        })}
      </ScrollView>
    </View>
  );
};
const RecipeCard = ({ item = {} }) => {
  const navigation = useNavigation();
  const img = item.img.includes("example.com") ? noPhoto : item.img;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { id: item.id })}
      style={{
        backgroundColor: "white",
        marginRight: 20,
        height: 80,
        width: 200,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 5,
        overflow: "hidden",
      }}
    >
      <Image
        source={{ uri: img }}
        style={{ width: 80, height: "100%", borderRadius: 10 }}
        containerStyle={{ borderRadius: 10 }}
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            flexWrap: "wrap",
            maxWidth: 100,
          }}
          numberOfLines={2}
        >
          {item.title}
        </Text>
        <Line />
        <Text numberOfLines={1} style={{ fontSize: 12, opacity: 0.3 }}>
          {item.category.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const Line = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        width: "80%",
        height: 1,
        opacity: 0.1,
        marginTop: 5,
      }}
    ></View>
  );
};
const CategoriesButtons = () => {
  return (
    <View style={{ marginTop: 20 }}>
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
const RecipeOfTheDay = () => {
  const navigation = useNavigation();
  const maxRecipes = Recipes.length;
  let randomId = Math.floor(Math.random() * 10);
  const recipe = Recipes.find((item) => item.id == randomId);
  const img = recipe.img.includes("example.com") ? noPhoto : recipe.img;
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth - 20;

  const openDetail = () => {
    navigation.navigate("Detail", { id: recipe.id });
  };

  return (
    <View
      style={{
        width: "100%",
        marginBottom: 50,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#3a3f40",
        padding: 10,
      }}
    >
      <Image
        source={{ uri: img }}
        style={{ width: cardWidth, height: cardWidth }}
        containerStyle={{ borderRadius: 10 }}
      />
      <Text style={{ color: "white", fontSize: 18, marginTop: 10 }}>
        {recipe.title}
      </Text>
      <Text style={{ color: "white", opacity: 0.6 }}>
        Категория: {recipe.category.name}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          gap: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Сложность:</Text>
        <View style={{ flexDirection: "row" }}>
          {Array(recipe.difficulty)
            .fill(0)
            .map((item, ind) => {
              return (
                <Icon
                  id={ind.toString()}
                  name="star"
                  type="ion-icon"
                  color={"#fcc82b"}
                />
              );
            })}
        </View>
      </View>

      <Button
        title={"Перейти"}
        containerStyle={{ borderRadius: 10, marginTop: 10 }}
        color={"black"}
        onPress={() => openDetail()}
      />
    </View>
  );
};
