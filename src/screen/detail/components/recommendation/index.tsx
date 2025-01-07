import { ThemedView } from "@/components/ThemedView";
import { HistoricalPlacesContext } from "@/src/context/AppContext";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export const Recommendation = (props: { category: "Stone" | "Building" }) => {
  const { places, toggleVisited } = useContext(HistoricalPlacesContext);
  const router = useRouter();

  const filteredPlaces = places.filter((place) => place.category?.includes(props.category));

  const toDetailPlace = (id: number, index: number) => {
    toggleVisited(id);

    router.replace({
      pathname: "/detail/[id]",
      params: { id, data: String(id) },
    });
  };

  return (
    <View>
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ fontWeight: 600 }}>Place Suggestion</Text>
      </View>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ThemedView style={{ width: 14 }} />}
        data={filteredPlaces}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => toDetailPlace(item.id, index)}>
            <ThemedView style={{ position: "relative" }}>
              <Image source={item.image} style={{ width: 180, borderRadius: 10, height: 100 }} />
              <View style={styles.overlay} />
              <View style={{ position: "absolute", bottom: 10, left: 10, display: "flex", flexDirection: "column", gap: 5 }}>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{item.location.country}</Text>
                <Text style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{item.name}</Text>
              </View>
              {item.visited && (
                <View style={styles.visitedContainer}>
                  <Text style={{ color: "#fff", fontWeight: 600, fontSize: 10 }}>Visited</Text>
                </View>
              )}
            </ThemedView>
          </Pressable>
        )}
      />
    </View>
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
