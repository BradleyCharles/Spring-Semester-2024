import React from "react";
import { View, Button } from "react-native";
import { Link } from "expo-router";

export default ButtonComponent = ({ href, title }) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Link href={href} asChild>
        <Button title={title}></Button>
      </Link>
    </View>
  );
};
