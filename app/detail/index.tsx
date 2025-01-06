import { StyleSheet, ScrollView, Button } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";
import { HistoricalPlace } from "@/src/context/AppContext";
import { Image } from "expo-image";

export default function Page() {
  const { data } = useLocalSearchParams<{ data: string }>();
  const placeDetail: HistoricalPlace = JSON.parse(data);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image source={placeDetail.image} style={styles.reactLogo} />}
    >
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
