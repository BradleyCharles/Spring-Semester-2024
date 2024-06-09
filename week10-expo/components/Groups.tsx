import { useQuery } from "@tanstack/react-query";
import { Separator } from "@/components/SmallComponents";
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

interface TanstackProps {
  propKey: string;
}

export default function Tanstack() {
  const { isLoading, isError, isSuccess, data } = useQuery<{
    data: Breed[];
  }>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://dogapi.dog/api/v2/groups").then((res) => res.json()),
  });

  const [upDog, whatsUpDog] = useState("Foundation Stock Service"); //What's up dog?

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>Oof.. An error has occurred!</Text>;

  if (isSuccess) {
    const breed = data.data.find((breed) => breed.attributes.name === upDog);
    if (!breed) return <Text>Breed not found!</Text>; // Handle if breed is not found
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.contentCenter}>
          <Pressable
            style={styles.button}
            onPress={() => whatsUpDog(data.data[0].attributes.name)}
          >
            <Text>{data.data[0].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => whatsUpDog(data.data[1].attributes.name)}
          >
            <Text>{data.data[1].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => whatsUpDog(data.data[2].attributes.name)}
          >
            <Text>{data.data[2].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => whatsUpDog(data.data[3].attributes.name)}
          >
            <Text>{data.data[3].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => whatsUpDog(data.data[4].attributes.name)}
          >
            <Text>{data.data[4].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => whatsUpDog(data.data[5].attributes.name)}
          >
            <Text>{data.data[5].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => whatsUpDog(data.data[6].attributes.name)}
          >
            <Text>{data.data[6].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => whatsUpDog(data.data[7].attributes.name)}
          >
            <Text>{data.data[7].attributes.name}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => whatsUpDog(data.data[8].attributes.name)}
          >
            <Text>{data.data[8].attributes.name}</Text>
          </Pressable>
        </View>

        <View style={styles.contentLower}>
          <Separator />
          <Text>{breed.attributes.name}</Text>
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
  button: {
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
