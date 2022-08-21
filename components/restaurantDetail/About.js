import React from "react";
import { View, Text, Image, findNodeHandle } from "react-native";

const image =
  "https://media.gettyimages.com/photos/cozy-restaurant-for-gathering-with-friends-picture-id1159992039?s=612x612";

const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai ° Comfort Food ° $$ ° 4 ° 🎫 ° 4 ⭐ (2913+)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.title}
    </Text>
  );
};

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
