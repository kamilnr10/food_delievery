import React from "react";
import { View, Text, Image, findNodeHandle } from "react-native";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
    "https://media.gettyimages.com/photos/cozy-restaurant-for-gathering-with-friends-picture-id1159992039?s=612x612",
  price: "$$",
  reviews: "1500",
  rating: 5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

// const image =
//   "https://media.gettyimages.com/photos/cozy-restaurant-for-gathering-with-friends-picture-id1159992039?s=612x612";

const title = "Farmhouse Kitchen Thai Cuisine";
//const description = "Thai ° Comfort Food ° $$ ° 4 ° 🎫 ° 4 ⭐ (2913+)";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((eat) => eat.title).join(" ° ");

  const description = `${formattedCategories} ${
    price ? " ° " : ""
  } ° 🎫 ° ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = ({ name }) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {name}
    </Text>
  );
};

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {description}
  </Text>
);
