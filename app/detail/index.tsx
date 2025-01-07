import { StyleSheet, ScrollView, Button, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";
import { HistoricalPlacesContext } from "@/src/context/AppContext";
import { Image } from "expo-image";
import { useContext } from "react";

export default function Page() {
  const { data } = useLocalSearchParams<{ data: string }>();
  const { toggleVisited, places } = useContext(HistoricalPlacesContext);
  const placeDetail = places[Number(data)];

  // useFocusEffect(
  //   useCallback(() => {
  //     console.log("Focused on detail page");
  //     toggleVisited(placeDetail.id);
  //     return () => {};
  //   }, [])
  // );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image source={placeDetail.image} style={styles.reactLogo} />}
    >
      {placeDetail.visited && (
        <View style={{ backgroundColor: "#329ee6", borderRadius: 5, maxWidth: 80 }}>
          <ThemedText style={{ textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 600 }}>Visited</ThemedText>
        </View>
      )}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="link">{placeDetail.name}</ThemedText>
        {/* <HelloWave /> */}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{placeDetail.description}</ThemedText>
        <ThemedText type="subtitle">Built in {placeDetail.established}</ThemedText>
        <ThemedText type="default">Status: {placeDetail.status}</ThemedText>
      </ThemedView>

      <ScrollView horizontal>
        <ThemedText type="default">Status: {placeDetail.status}</ThemedText>
      </ScrollView>
      <Button title="Mark place as visited"></Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
