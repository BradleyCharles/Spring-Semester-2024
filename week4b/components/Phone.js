import React from "react";
import * as Linking from "expo-linking";
import { Text } from "@/components/Themed";

const Phone = ({ phone }) => {
  const handlePress = () => {
    Linking.openURL(`tel:${phone}`);
  };
  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, ""); // Remove all non-numeric characters
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/); // Match the format xxx-xxx-xxxx
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  }
  const number = formatPhoneNumber(phone);
  return (
    <Text style={{ textDecorationLine: "underline" }} onPress={handlePress}>
      {number}
    </Text>
  );
};

export default Phone;
