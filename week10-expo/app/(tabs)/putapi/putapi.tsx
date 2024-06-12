import React, { useEffect, useState } from "react";
import { Text, View } from "@/components/Themed";
import { Button } from "@/components/SmallComponents";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native";

// Define the type for the response data
type NestUpdate = {
  value: number;
  error?: string;
};

const MyComponent: React.FC = () => {
  const [data, setData] = useState<NestUpdate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState<number>(3); // State to hold the index value

  const fetchData = () => {
    fetch(`http://localhost:3000/nestapi/${index}`, {
      method: "PUT", // Specify the HTTP method
      headers: {
        "Content-Type": "application/json", // Set the content type
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: NestUpdate) => {
        console.log(data); // Log the response data
        if (data.error) {
          setError(data.error);
        } else {
          setData(data); // Set the state with the fetched data
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.toString()); // Set the error state
      });
  };

  useEffect(() => {
    fetchData();
  }, [index]); // Fetch data whenever index changes

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        <Text>Select Index:</Text>
        <Picker
          selectedValue={index}
          onValueChange={(itemValue: number) => setIndex(itemValue)}
        >
          <Picker.Item label="Item 1" value={0} />
          <Picker.Item label="Item 2" value={1} />
          <Picker.Item label="Item 3" value={2} />
          <Picker.Item label="Item 4" value={3} />
          <Picker.Item label="Item 5" value={4} />
          <Picker.Item label="Item 6" value={5} />
          <Picker.Item label="Item 7" value={6} />
        </Picker>

        <Text>Original Value: [10, 20, 30, 40, 50, 60, 70]</Text>
        <Text>{JSON.stringify(data, null, "")}</Text>
      </View>
    </ScrollView>
  );
};

export default MyComponent;
