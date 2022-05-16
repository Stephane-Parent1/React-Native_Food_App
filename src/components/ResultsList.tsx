import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList, RectButton } from "react-native-gesture-handler";
import { Business } from "../api/yelp.model";
import useResults from "../hooks/useYelpResults";
import { ResultsDetail } from "./ResultsDetail";
import { NavigationRoute, NavigationScreenProp } from "react-navigation";
import { useNavigation } from "../hooks/useNavigation";
import { ParamResultsShowScreem } from "../screens/ResultsShowScreen";
import { Route } from "../navigation/route.model";

interface ResultsListProps {
  title: string;
  results: Business[];
}

export const ResultsList: React.FC<ResultsListProps> = ({ title, results }) => {
  const navigation = useNavigation();

  if (!results.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Route.SHOW_BUSINESS, {
                  id: item.id,
                })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
});
