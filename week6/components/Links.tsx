import React from "react";
import { Linking } from "react-native";
import { Text } from "@/components/Themed";
import { TouchableOpacity } from "react-native";

interface EmailLinkProps {
  email: string; // Define the type of email as string
}

interface PhoneProps {
  phone: number; // Define the type of email as string
}

interface ExternalLinkProps {
  url: string;
  title: string;
}

const EmailLink: React.FC<EmailLinkProps> = ({ email }) => {
  const handlePress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <Text style={{ textDecorationLine: "underline" }} onPress={handlePress}>
      {email}
    </Text>
  );
};

const Phone: React.FC<PhoneProps> = ({ phone }) => {
  const handlePress = () => {
    Linking.openURL(`tel:${phone}`);
  };

  function formatPhoneNumber(phoneNumberString: number) {
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

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, title }) => {
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

export { EmailLink, Phone, ExternalLink };
