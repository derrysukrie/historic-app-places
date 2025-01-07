import { SearchBar } from "@/components/SearchBar";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Places } from "./components/places";
import { useContext, useEffect } from "react";
import { Linking } from "react-native";
import { useRouter } from "expo-router";
import { HistoricalPlacesContext } from "@/src/context/AppContext";

export default function HomeScreen() {
  const router = useRouter();
  const { places, toggleVisited } = useContext(HistoricalPlacesContext);

  useEffect(() => {
    const handleDeepLink = (event: any) => {
      const url = event.url;
      const params = new URLSearchParams(url.split("?")[1]);
      const id = params.get("id") as string;

      if (params.has("id")) {
        toggleVisited(places[Number(id)].id);

        router.push({
          pathname: "/detail/[id]",
          params: { id, data: String(id) },
        });
      }
    };

    Linking.addEventListener("url", handleDeepLink);

    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  return (
    <SafeAreaView>
      <ThemedView style={{ paddingHorizontal: 20 }}>
        <ThemedView style={{ paddingVertical: 20 }}>
          <ThemedText type="title">Explore</ThemedText>
          <ThemedText type="title">all sights</ThemedText>
        </ThemedView>
        <Places />
      </ThemedView>
    </SafeAreaView>
  );
}
