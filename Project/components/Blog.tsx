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

export default function Tanstack() {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  const [upDog, whatsUpDog] = useState("68f47c5a-5115-47cd-9849-e45d3c378f12"); //What's up dog?

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>Oof.. An error has occurred!</Text>;

  if (isSuccess) {
    /* const breed = data.data.find((breed) => breed.id === upDog); */
    /* if (!breed) return <Text>Breed not found!</Text>; */ // Handle if breed is not found
    return (
      <ScrollView style={styles.scroll}>
        {/* <Text style={styles.content}>{breed.attributes.name}: </Text>
        <View style={styles.contentCenter}>
          <Text>{breed.attributes.description}</Text>
        </View> */}
        <View>
          {data.map((todo: { id: string; title: string }) => (
            <View>
              <Text>{todo.id}</Text>
              <Text>Title: {todo.title}</Text>
            </View>
          ))}
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
