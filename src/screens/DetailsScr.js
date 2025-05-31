import { Button, Image, Text } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import { Recipes } from "../mock/Recipes";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { noPhoto } from "../assets/links";

export const DetailScr = ({ route }) => {
  const { id } = route.params;
  const [recipe, setRecipe] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      const recipe = Recipes.find((item) => item.id == id);
      setRecipe(recipe);

      return () => {
        setRecipe({});
      };
    }, [id])
  );

  if (recipe.id) {
    const img = recipe.img.includes("example.com") ? noPhoto : recipe.img;

    return (
      <ScrollView
        style={{
          backgroundColor: "black",
          padding: 10,
        }}
      >
        <View>
          <Image
            source={{ uri: img }}
            style={{ width: "100%", height: 300 }}
            containerStyle={{ borderRadius: 10 }}
          />
        </View>

        <ScrollView
          horizontal={true}
          style={{ marginTop: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {recipe.tags?.map((item) => {
            return (
              <Button
                key={item}
                title={item}
                titleStyle={{ color: "black", fontSize: 14 }}
                buttonStyle={{
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 7,
                  marginRight: 10,
                }}
                color={"white"}
              />
            );
          })}
        </ScrollView>

        <Text style={{ marginTop: 10, color: "white", fontSize: 28 }}>
          {recipe.title}
        </Text>
        <Line />

        <Text style={{ marginTop: 10, color: "white", fontSize: 16 }}>
          {recipe.description}
        </Text>
        <Text style={{ marginTop: 10, color: "white", fontSize: 16 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>

        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontSize: 20, marginBottom: 5 }}>
            ингредиенты
          </Text>
          {recipe.ingredients?.map((item) => {
            return <Ingredient id={item.id} item={item} />;
          })}
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontSize: 20, marginBottom: 5 }}>
            Рецепт
          </Text>

          {recipe.todos?.map((item) => {
            return (
              <Text style={{ color: "white", fontSize: 14 }} id={item.id}>
                {item.index}. {item.action}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    );
  }
};
const Ingredient = ({ item = {} }) => {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <Text style={{ color: "white" }}>{item.title}</Text>
      <Text style={{ color: "white" }}>{item.quantity}</Text>
    </View>
  );
};
const Line = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
        height: 1,
        opacity: 0.3,
        marginTop: 5,
      }}
    ></View>
  );
};
