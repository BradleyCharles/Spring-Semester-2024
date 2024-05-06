import React from "react";
import { Linking } from "react-native";
import { Text } from "@/components/Themed";

const EmailLink = ({ email }) => {
  const handlePress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <Text style={{ textDecorationLine: "underline" }} onPress={handlePress}>
      {email}
    </Text>
  );
};

export default EmailLink;
