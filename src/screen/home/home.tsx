import { SearchBar } from "@/components/SearchBar";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        <ThemedView style={{ paddingHorizontal: 20 }}>
          <ThemedText type="title">Explore</ThemedText>
          <ThemedText type="title">all sights</ThemedText>
          <SearchBar readOnly />
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}
