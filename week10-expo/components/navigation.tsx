import React from "react";
import { StyleSheet } from "react-native";

import { View } from "./Themed";
import { Button } from "./SmallComponents";

const BackButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <Button href="/(tabs)/" label=" BACK " />
        <Button href="/(tabs)/getapi" label=" @Get " />
        <Button href="/(tabs)/getapi-index" label=" @Get Index 3 " />
        <Button href="/(tabs)/postapi" label=" @Post " />
        <Button href="/(tabs)/putapi" label=" @Put " />
        <Button href="/(tabs)/deleteapi" label=" @Delete " />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    justifyContent: "center",
    backgroundColor: "#ddd",
    width: "100%",
    height: 80,
    marginBottom: 20,
  },
  containerRow: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default BackButton;
