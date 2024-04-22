import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    // Using functional update to ensure the correct state is used
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, completed: false },
    ]);
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <View>
      <Button title="Add" onPress={addTask} />
      {tasks.map((task) => (
        <View key={task.id}>
          <Text
            style={{
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Task #{task.id} - Completed: {task.completed ? "Yes" : "No"}
          </Text>
          <Button
            title="Toggle"
            onPress={() => toggleTask(task.id)}
            color={task.completed ? "#00ff00" : "#ff0000"}
          />
          <Button title="Delete" onPress={() => deleteTask(task.id)} />
        </View>
      ))}
    </View>
  );
}

export default TaskManager;
