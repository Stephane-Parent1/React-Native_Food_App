import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
import { Business } from "../api/yelp.model";
import { ResultsList } from "../components/ResultsList";
import { SearchBar } from "../components/SearchBar";
import useYelpResults from "../hooks/useYelpResults";

export const SearchScreen: React.FC = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useYelpResults();

  const filterResultsByPrice = (price: string | string[] | undefined) => {
    return results.filter((result) => {
      if (Array.isArray(price)) {
        for (let i = 0; i < price.length; i++) {
          if (result.price === price[i]) return true;
        }
        return false;
      }

      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice(["$$$", "$$$$"])}
          title="Big Spender"
        />
        <ResultsList
          results={filterResultsByPrice(undefined)}
          title="Price Not set"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
