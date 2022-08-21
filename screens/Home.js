import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems from "../components/home/RestaurantItems";
import { localRestaurants } from "../components/home/RestaurantItems";
import { APP_YELP_API } from "@env";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${APP_YELP_API}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.businesses);

        setRestaurantData(
          json.businesses.transactions
            ? json.businesses.filter((businesses) =>
                businesses.transactions.includes(activeTab.toLowerCase())
              )
            : json.businesses
        );
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
