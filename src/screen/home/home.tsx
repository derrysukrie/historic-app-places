import { SearchBar } from "@/components/SearchBar";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Places } from "./components/places";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ThemedView style={{ paddingHorizontal: 20 }}>
        <ThemedText type="title">Explore</ThemedText>
        <ThemedText type="title">all sights</ThemedText>
        <SearchBar readOnly />
        <Places />
      </ThemedView>
    </SafeAreaView>
  );
}
