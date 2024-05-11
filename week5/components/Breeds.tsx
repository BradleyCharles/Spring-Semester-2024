import { useQuery } from "@tanstack/react-query";
import { Seperator } from "@/components/SmallComponents";
import { Text, View } from "@/components/Themed";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";

interface Breed {
  id: string;
  attributes: {
    name: string;
    description: string;
    // Add more attributes if needed
  };
}

export default function Tanstack() {
  const { isLoading, isError, isSuccess, data } = useQuery<{
    data: Breed[];
  }>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://dogapi.dog/api/v2/breeds").then((res) => res.json()),
  });

  const [upDog, whatsUpDog] = useState("68f47c5a-5115-47cd-9849-e45d3c378f12"); //What's up dog?

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>Oof.. An error has occurred!</Text>;

  if (isSuccess) {
    const breed = data.data.find((breed) => breed.id === upDog);
    if (!breed) return <Text>Breed not found!</Text>; // Handle if breed is not found
    return (
      <ScrollView style={styles.scroll}>
        <Text style={styles.content}>{breed.attributes.name}: </Text>
        <View style={styles.contentCenter}>
          <Text>{breed.attributes.description}</Text>
        </View>
        <View style={styles.contentLower}>
          <Seperator />

          <Pressable
            style={styles.dogButton}
            onPress={() => whatsUpDog(data.data[0].id)}
          >
            <Text>{data.data[0].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.dogButton}
            onPress={() => whatsUpDog(data.data[1].id)}
          >
            <Text>{data.data[1].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.dogButton}
            onPress={() => whatsUpDog(data.data[2].id)}
          >
            <Text>{data.data[2].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.dogButton}
            onPress={() => whatsUpDog(data.data[3].id)}
          >
            <Text>{data.data[3].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.dogButton}
            onPress={() => whatsUpDog(data.data[4].id)}
          >
            <Text>{data.data[4].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.dogButton}
            onPress={() => whatsUpDog(data.data[5].id)}
          >
            <Text>{data.data[5].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.dogButton}
            onPress={() => whatsUpDog(data.data[6].id)}
          >
            <Text>{data.data[6].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.dogButton}
            onPress={() => whatsUpDog(data.data[7].id)}
          >
            <Text>{data.data[7].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.dogButton}
            onPress={() => whatsUpDog(data.data[8].id)}
          >
            <Text>{data.data[8].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.dogButton}
            onPress={() => whatsUpDog(data.data[9].id)}
          >
            <Text>{data.data[9].attributes.name}</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  scroll: {
    margin: 10,
    flex: 1,
  },
  content: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  contentCenter: {
    minHeight: 200,
  },
  contentLower: {
    alignItems: "center",
    justifyContent: "center",
  },
  dogButton: {
    width: 200,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#666",
    borderRadius: 25,
    marginTop: 5,
  },
});
