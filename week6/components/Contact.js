import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text } from "@/components/Themed";
import { EmailLink, Phone, ExternalLink } from "@/components/Links";

export default function Contact() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textLarge}>Phone</Text>
        <Phone phone="4253093920" />
        <Text style={styles.textLarge}>Email</Text>
        <EmailLink email="bradgcharles@gmail.com" />
        <Text style={styles.textLarge}>Linkedin</Text>
        <ExternalLink
          url="https://www.linkedin.com/in/bradgcharles"
          title="linkedin.com/in/bradgcharles"
        />
        <Text style={styles.textLarge}>GitHub</Text>
        <ExternalLink
          url="https://github.com/BradleyCharles"
          title="Github.com/BradleyCharles"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    marginVertical: 10,
  },
  textLarge: {
    fontSize: 18,
    marginVertical: 10,
  },
});
