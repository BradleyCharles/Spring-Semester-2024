import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";

function Comment() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#202324",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,

      marginBottom: 50,
    },
    imageContainer: {
      marginVertical: 10,
      alignItems: "center",
    },
    image: {
      width: 200,
      height: 200,
      borderWidth: 5,
    },
    input: {
      color: "rgb(249, 243, 234)",
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: "#fff",
      padding: 10,
      width: 300,
    },
    textInputContainer: {
      flex: 3,
    },
    textLarge: {
      fontSize: 18,
      marginVertical: 10,
      color: "rgb(249, 243, 234)",
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textLarge}>Leave me a comment!</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Click Here!"
          placeholderTextColor="rgb(149, 143, 134)"
        />
      </View>
      <Button
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
}

export default Comment;
