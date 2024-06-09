import React from "react";
import { View, Button } from "react-native";

const DecreaseOne = ({ handleDecrease }) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Button title="Previous" onPress={handleDecrease} />
    </View>
  );
};

const IncreaseOne = ({ handleIncrease }) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Button title="Next" onPress={handleIncrease} />
    </View>
  );
}; /*  */

export { IncreaseOne, DecreaseOne };
