import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { Business } from "../api/yelp.model";

interface ResultsDetail {
  result: Business;
}

export const ResultsDetail: React.FC<ResultsDetail> = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
