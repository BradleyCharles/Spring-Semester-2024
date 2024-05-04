import { Text } from "@/components/Themed";
import * as Linking from "expo-linking";
import React from "react";
import { TouchableOpacity } from "react-native";

const ExternalLink = ({ url, title }) => {
  const handlePress = async () => {
    // Check if the device can open the given URL
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Open the URL in the device's default browser
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ textDecorationLine: "underline" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ExternalLink;
