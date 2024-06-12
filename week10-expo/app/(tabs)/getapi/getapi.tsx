import React, { useEffect, useState } from "react";
import { Text, View } from "@/components/Themed";
import { ScrollView } from "react-native";

// Define the type for the response data
type NestUpdate = {
  value: number;
  error?: string;
};

const MyComponent: React.FC = () => {
  const [data, setData] = useState<NestUpdate | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/nestapi/`, {
      method: "GET", // Specify the HTTP method
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
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

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
        <Text>Original Value: [1, 2, 3, 4, 5, 6, 7]</Text>
        <Text>{JSON.stringify(data, null, "")}</Text>
      </View>
    </ScrollView>
  );
};

export default MyComponent;
