import { StyleSheet, View, Linking, Pressable, Button, Alert } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";
import { HistoricalPlacesContext } from "@/src/context/AppContext";
import { Image } from "expo-image";
import { useContext } from "react";
import { Recommendation } from "./components/recommendation";
import * as Clipboard from 'expo-clipboard';

export default function DetailPage() {
  const { data } = useLocalSearchParams<{ data: string }>();

  const { places, setUnvisited } = useContext(HistoricalPlacesContext);
  const placeDetail = places[Number(data)];

  const toWiki = () => {
    Linking.openURL(placeDetail.link);
  };

  const handleUnvisited = () => {
    setUnvisited(placeDetail.id);
  };

  const copyDeeplinkUrl = async () => {
    await Clipboard.setStringAsync(`myapp://?id=${placeDetail.id}`);
    Alert.alert("Copied to clipboard", "You can now paste the link in chrome to open the app");
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image source={placeDetail?.image} style={styles.reactLogo} />}
    >
      <ThemedView style={styles.titleContainer}>
        <Pressable onPress={toWiki}>
          <ThemedText style={{ textDecorationLine: "underline", fontSize: 20 }} type="link">
            {placeDetail?.name}
          </ThemedText>
        </Pressable>
        {placeDetail?.visited && (
          <View style={{ backgroundColor: "#329ee6", borderRadius: 5, paddingHorizontal: 10, maxWidth: 80 }}>
            <ThemedText style={{ textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 600 }}>Visited</ThemedText>
          </View>
        )}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{placeDetail?.description}</ThemedText>
        <ThemedText type="subtitle">Built in {placeDetail?.established}</ThemedText>
        <ThemedText type="default">Status: {placeDetail?.status}</ThemedText>
      </ThemedView>
      <Recommendation category={placeDetail.category} />

      <Button onPress={handleUnvisited} title="Mark place as unvisited"></Button>
      <Button onPress={copyDeeplinkUrl} title="Share"></Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
