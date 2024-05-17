import { useQuery } from "@tanstack/react-query";
import { Separator } from "@/components/SmallComponents";
import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";
import React from "react";

export default function Tanstack() {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://dogapi.dog/api/v2/facts").then((res) => res.json()),
  });

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>Oof.. An error has occurred!</Text>;

  if (isSuccess) {
    return (
      <View style={styles.scroll}>
        <Separator />
        <Text style={styles.content}>{data.data[0].attributes.body}</Text>
        <Separator />
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  scroll: {
    margin: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 18,
    marginBottom: 2,
  },
  link: {
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
