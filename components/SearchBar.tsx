import { useCallback } from "react";
import { TextInput, TextInputProps, View } from "react-native";


export const SearchBar = (props?: TextInputProps) => {
  const handleSearch = useCallback((text: string) => {
    setTimeout(() => {
      console.log('Search Term:', text);
    }, 1400);
  }, []);

  return (
    <View style={{ marginVertical: 20, height: 50, display: "flex", paddingHorizontal: 10, justifyContent: "center", borderRadius: 10, backgroundColor: "#f6f6f6" }}>
      <TextInput onChangeText={handleSearch} placeholder="Search place..." style={{ fontSize: 16 }} placeholderTextColor="#666" {...props} />
    </View>
  );
};
