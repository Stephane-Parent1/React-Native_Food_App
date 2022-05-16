import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
import { useNavigation } from "../hooks/useNavigation";

export interface ParamResultsShowScreem {
  id: string;
}

export const ResultsShowScreen: React.FC = () => {
  const [result, setResult] = useState(null);
  const navigation = useNavigation<ParamResultsShowScreem>();
  const { id } = navigation.state.params;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(url) => url}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
