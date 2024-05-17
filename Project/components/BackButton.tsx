import React from "react";
import { Pressable, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const BackButton = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  let containerStyle = styles.mobileContainer;

  if (Platform.OS === "web") {
    containerStyle = styles.webContainer;
  }

  return (
    <Pressable style={containerStyle} onPress={goBack}>
      <AntDesign name="back" size={24} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mobileContainer: {
    alignItems: "center",
    backgroundColor: "#999",
    width: 90,
    height: "110%",
    borderWidth: 1,
    borderColor: "black",
    borderBottomLeftRadius: 25,
  },
  webContainer: {
    alignItems: "center",
    backgroundColor: "#999",
    width: 30,
    height: "110%",
    borderWidth: 1,
    borderColor: "black",
    borderBottomLeftRadius: 25,
  },
});

export default BackButton;
