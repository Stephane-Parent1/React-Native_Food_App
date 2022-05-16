import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

interface SearchBarProps {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  term,
  onTermChange,
  onTermSubmit,
}) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.searchIcon} name="search" size={35} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={styles.input}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
