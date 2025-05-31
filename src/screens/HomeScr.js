import { useNavigation } from "@react-navigation/native";
import { Button, Image, Text, Input, Icon } from "@rneui/themed";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { Recipes } from "../mock/Recipes";
import { Categories } from "../mock/Categories";

export const HomeScr = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <SearchInput />
      <SystemButtons />

      <ScrollView style={{ backgroundColor: "black", padding: 10 }}>
        <CategoriesButtons />
      </ScrollView>
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
    <View style={{ flexDirection: "row", gap: 10 }}>
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
        title={"Сохраненные"}
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
