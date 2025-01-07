import { TextInput, TextInputProps, View } from "react-native";

export const SearchBar = (props?: TextInputProps) => {
  return (
    <View
      style={{ marginVertical: 20, height: 50, display: "flex", paddingHorizontal: 10, justifyContent: "center", borderRadius: 10, backgroundColor: "#f6f6f6" }}
    >
      <TextInput placeholder="Search place..." style={{ fontSize: 16 }} placeholderTextColor="#666" {...props} />
    </View>
  );
};
