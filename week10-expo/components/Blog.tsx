import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Separator } from "@/components/SmallComponents";
import { Text, View } from "@/components/Themed";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import axios from "axios";

interface NewPost {
  id?: number;
  title?: string;
  body?: string;
}
interface UpdatePostFormProps {
  postId: number;
}

export default function TanstackQuery() {
  const { isLoading, isError, isSuccess, data } = useQuery<NewPost[]>({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  const { mutate } = useMutation({
    mutationFn: (newPost: NewPost) =>
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
      }).then((res) => res.json()),
  });

  const updatePost = async ({ id, title, body }: NewPost): Promise<NewPost> => {
    const response = await axios.put<NewPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { title, body }
    );
    return response.data;
  };

  const patchPost = async ({ id, title, body }: NewPost): Promise<NewPost> => {
    const response = await axios.patch<NewPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { title, body }
    );
    return response.data;
  };

  const deletePost = async ({ id }: NewPost): Promise<NewPost> => {
    const response = await axios.delete<NewPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  };

  const [task, setTask] = useState(0);
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleMutation = (newPost: NewPost) => {
    mutate(newPost);
  };

  switch (task) {
    case 1:
      if (isLoading) return <Text>Loading...</Text>;

      if (isError) return <Text>Oof.. An error has occurred!</Text>;

      if (isSuccess) {
        return (
          <ScrollView style={styles.scroll}>
            <View style={styles.title}>
              <Text style={styles.title}>Blogland</Text>
              <Button label="Go Back!" onPress={() => setTask(0)} />
            </View>
            <View>
              {data.map((todo) => (
                <View key={todo.id}>
                  <Text>
                    {"ID -->"} {todo.id}
                  </Text>
                  <Text>
                    {"TITLE ---->"} {todo.title}
                  </Text>
                  <Text>
                    {"BODY -->"} {todo.body}
                  </Text>
                  <Separator />
                </View>
              ))}
            </View>
          </ScrollView>
        );
      }
      break;
    case 2:
      if (isLoading) return <Text>Loading...</Text>;

      if (isError) return <Text>Oof.. An error has occurred!</Text>;

      if (isSuccess) {
        return (
          <ScrollView style={styles.scroll}>
            <View style={styles.title}>
              <Text style={styles.title}>Blogland</Text>
              <Button label="Go Back!" onPress={() => setTask(0)} />
            </View>
            <View>
              <Text style={styles.small}>Title:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter a title"
                value={title}
                onChangeText={setTitle}
              />
              <Text style={styles.small}>Body:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter a message"
                value={body}
                onChangeText={setBody}
              />
            </View>
            <Button
              label="Submit"
              onPress={() => handleMutation({ title: title, body: body })}
            />
          </ScrollView>
        );
      }
      break;
    case 3:
      if (isLoading) return <Text>Loading...</Text>;

      if (isError) return <Text>Oof.. An error has occurred!</Text>;

      if (isSuccess) {
        return (
          <ScrollView style={styles.scroll}>
            <View style={styles.title}>
              <Text style={styles.title}>Blogland</Text>
              <Button label="Go Back!" onPress={() => setTask(0)} />
            </View>
            <View>
              <Text style={styles.small}>Title:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter a title"
                value={title}
                onChangeText={setTitle}
              />
              <Text style={styles.small}>Body:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter a message"
                value={body}
                onChangeText={setBody}
              />
            </View>
            <Button
              label="Submit"
              onPress={() => updatePost({ id: 1, title: title, body: body })}
            />
          </ScrollView>
        );
      }
      break;
    case 4:
      if (isLoading) return <Text>Loading...</Text>;

      if (isError) return <Text>Oof.. An error has occurred!</Text>;

      if (isSuccess) {
        return (
          <ScrollView style={styles.scroll}>
            <View style={styles.title}>
              <Text style={styles.title}>Blogland</Text>
              <Button label="Go Back!" onPress={() => setTask(0)} />
            </View>
            <View>
              <Text style={styles.small}>Title:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter a title"
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <Button
              label="Submit"
              onPress={() => patchPost({ id: 1, title: title })}
            />
          </ScrollView>
        );
      }
      break;
    case 5:
      if (isLoading) return <Text>Loading...</Text>;

      if (isError) return <Text>Oof.. An error has occurred!</Text>;

      if (isSuccess) {
        const filteredData = data.filter((todo) => todo.id === id);
        return (
          <ScrollView style={styles.scroll}>
            <View style={styles.title}>
              <Text style={styles.title}>Blogland</Text>
              <Button label="Go Back!" onPress={() => setTask(0)} />
            </View>
            <View>
              {filteredData.map((todo) => (
                <View key={todo.id}>
                  <Text>
                    {"ID -->"} {todo.id}
                  </Text>
                  <Text>
                    {"TITLE ---->"} {todo.title}
                  </Text>
                  <Text>
                    {"BODY -->"} {todo.body}
                  </Text>
                </View>
              ))}
            </View>
            <Button label="Delete post" onPress={() => deletePost({ id: 1 })} />
          </ScrollView>
        );
      }
      break;
    case 6:
      if (isLoading) return <Text>Loading...</Text>;

      if (isError) return <Text>Oof.. An error has occurred!</Text>;

      if (isSuccess) {
        const filteredData = data.filter((todo) => todo.id === id);
        return (
          <ScrollView style={styles.scroll}>
            <View style={styles.title}>
              <Text style={styles.title}>Blogland</Text>
              <Button label="Go Back!" onPress={() => setTask(0)} />
            </View>
            <View>
              {filteredData.map((todo) => (
                <View key={todo.id}>
                  <Text>
                    {"ID -->"} {todo.id}
                  </Text>
                  <Text>
                    {"TITLE ---->"} {todo.title}
                  </Text>
                  <Text>
                    {"BODY -->"} {todo.body}
                  </Text>
                </View>
              ))}
            </View>
            <Button label="View post 1" onPress={() => setId(1)} />
            <Button label="View post 2" onPress={() => setId(2)} />
            <Button label="View post 3" onPress={() => setId(3)} />
            <Button label="View post 4" onPress={() => setId(4)} />
            <Button label="View post 5" onPress={() => setId(5)} />
          </ScrollView>
        );
      }
      break;

    default:
      break;
  }

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.title}>Welcome to Blogland!</Text>
      <Button label="Show all blogs" onPress={() => setTask(1)} />
      <Separator />
      <Button label="Create a post" onPress={() => setTask(2)} />
      <Separator />
      <Button label="Update a post" onPress={() => setTask(3)} />
      <Separator />
      <Button label="Patch a post" onPress={() => setTask(4)} />
      <Separator />
      <Button label="Delete a post" onPress={() => setTask(5)} />
      <Separator />
      <Button label="Filter a post" onPress={() => setTask(6)} />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    margin: 10,
    flex: 1,
  },
  title: {
    marginVertical: 30,
    fontSize: 32,
    fontFamily: "Kailasa-Bold",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  contentCenter: {
    minHeight: 200,
  },
  contentLower: {
    alignItems: "center",
    justifyContent: "center",
  },
  small: {
    margin: 10,
    fontSize: 11,
  },
  input: {
    width: 200,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#666",
    borderRadius: 5,
    marginTop: -10,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  nav: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    padding: 20,
  },
});
