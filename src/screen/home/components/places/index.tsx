import { ThemedView } from "@/components/ThemedView";
import { HistoricalPlace, HistoricalPlacesContext } from "@/src/context/AppContext";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export const Places = () => {
  const router = useRouter();
  const { places } = useContext(HistoricalPlacesContext);

  const toDetailPlace = (placeDetail: HistoricalPlace) => {
    router.push({
      pathname: "/detail",
      params: { data: JSON.stringify(placeDetail) },
    });
  };

  return (
    <ThemedView>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 560 }}
        ItemSeparatorComponent={() => <ThemedView style={{ height: 20 }} />}
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => toDetailPlace(item)}>
            <ThemedView style={{ position: "relative" }}>
              <Image source={item.image} style={{ width: "100%", borderRadius: 10, height: 140 }} />
              <View style={styles.overlay} />
              <View style={{ position: "absolute", bottom: 10, left: 10, display: "flex", flexDirection: "column", gap: 5 }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>{item.location.country}</Text>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{item.name}</Text>
              </View>
              {item.visited && (
                <View style={styles.visitedContainer}>
                  <Text style={{ color: "#fff", fontWeight: 600 }}>Visited</Text>
                </View>
              )}
            </ThemedView>
          </Pressable>
        )}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire ImageBackground
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
    borderRadius: 10,
  },
  visitedContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#4fadec",
    padding: 5,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
});
