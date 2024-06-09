import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Separator } from "@/components/SmallComponents";
import React, { useState } from "react";
import Button from "@/components/Button";

export default function Generic(): JSX.Element {
  const identity =
    <T,>(x: T) =>
    () =>
      x;

  const reverse =
    <T,>(array: T[]) =>
    () =>
      array.reverse();

  function mapper<K extends keyof any, V, U>(
    obj: Record<K, V>,
    mapFn: (value: V) => U
  ): Record<K, U> {
    const mappedObject: Record<K, U> = {} as Record<K, U>;

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        mappedObject[key] = mapFn(obj[key]);
      }
    }
    return mappedObject;
  }

  function filterArray<Type>(arg: Type[]) {
    function x(arg: any) {
      return arg % 2 === 0;
    }

    const result = arg.filter(x);
    return result;
  }

  const [identifyString, setIdentifyString] = useState<string | null>(null);
  const [identifyNumber, setIdentifyNumber] = useState<number | null>(null);
  const [reverseArray, setReverseArray] = useState<number[] | null>(null);
  const [objectMapper, setObjectMapper] = useState<Record<
    string,
    string | null
  > | null>(null);
  const [filterState, setFilterState] = useState<number[] | null>(null);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Building a Generic Utility Library in TypeScript
        </Text>
        <Separator />
        <Button
          label='Generic Identity Function "Hello BC"'
          onPress={() => setIdentifyString(identity<string>("Hello BC")())}
        />
        <Text style={styles.text}>{identifyString}</Text>
        <Separator size={10} />
        <Button
          label='Generic Identity Function "42"'
          onPress={() => setIdentifyNumber(identity<number>(42)())}
        />
        <Text style={styles.text}>{identifyNumber}</Text>
        <Separator size={10} />
        <Button
          label='Generic Generic Array Reversal Function "42, 41, 40"'
          onPress={() => setReverseArray(reverse<number>([42, 41, 40])())}
        />
        {reverseArray !== null && (
          <Text style={styles.text}>{reverseArray.join(", ")}</Text>
        )}
        <Separator size={10} />
        <Button
          label='Generic Object Mapper Function "a: 1, b: 2"'
          onPress={() =>
            setObjectMapper(mapper({ a: 1, b: 2 }, (value) => value.toString()))
          }
        />
        <Text style={styles.text}>
          {objectMapper &&
            Object.entries(objectMapper)
              .map(([key, value]) => `${key}: "${value}"`)
              .join(", ")}
        </Text>
        <Separator size={10} />
        <Button
          label='Generic Filtering Function "1, 2, 3, 4"'
          onPress={() => setFilterState(filterArray([1, 2, 3, 4]))}
        />
        {filterState !== null && (
          <Text style={styles.text}>{filterState.join(", ")}</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginTop: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    marginTop: 3,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
