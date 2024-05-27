import { useQuery } from "@tanstack/react-query";
import { Button, Separator } from "@/components/SmallComponents";
import { Text, View } from "@/components/Themed";
import { ScrollView, StyleSheet } from "react-native";
import { useState } from "react";

export default function Tanstack() {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  const [task, setTask] = useState(0); //What's up dog?
  switch (task) {
    case 1:
      if (isLoading) return <Text>Loading...</Text>;

      if (isError) return <Text>Oof.. An error has occurred!</Text>;

      if (isSuccess) {
        return (
          <ScrollView style={styles.scroll}>
            <View style={styles.title}>
              <Text style={styles.title}>Blogland</Text>
              <Button label="Go Back!" onPress={() => setTask(0)} />
            </View>
            <View>
              {data.map(
                (todo: {
                  userId: number;
                  id: number;
                  title: string;
                  body: string;
                }) => (
                  <View>
                    <Text>
                      {"USER ID -->"} {todo.userId}
                    </Text>
                    <Text>
                      {"ID -->"} {todo.id}
                    </Text>
                    <Text>
                      {"TITLE ---->"} {todo.title}
                    </Text>
                    <Text>
                      {"BODY -->"} {todo.body}
                    </Text>
                    <Separator />
                  </View>
                )
              )}
            </View>
          </ScrollView>
        );
      }
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;

    default:
      break;
  }

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.title}>Welcome to Blogland!</Text>
      <Button label="Show all blogs" onPress={() => setTask(1)} />
      <Separator />
      <Button label="Create a post" onPress={() => setTask(2)} />
      <Separator />
      <Button label="Update a post" onPress={() => setTask(3)} />
      <Separator />
      <Button label="patch a post" onPress={() => setTask(4)} />
      <Separator />
      <Button label="delete a post" onPress={() => setTask(5)} />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    margin: 10,
    flex: 1,
  },
  title: {
    marginVertical: 30,
    fontSize: 32,
    fontFamily: "Kailasa-Bold",
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
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
  nav: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
