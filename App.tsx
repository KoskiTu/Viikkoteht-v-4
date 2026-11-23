import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from './TextAndSave/Input';
import { DoneButton } from './TextAndSave/DoneButton';
import styles from './Styles/Style';

type TodoItem = {
  id: string;
  text: string;
  done: boolean;
};

const STORAGE_KEY = '@todo_items_clean';

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed: unknown = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            setTodos(parsed as TodoItem[]);
          }
        }
      } finally {
        setIsLoaded(true);
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos, isLoaded]);

  const handleAddTask = (text: string) => {
    const newTask: TodoItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      text,
      done: false,
    };
    setTodos((prev) => [...prev, newTask]);
  };

  const handleToggleTask = (id: string) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 }}>
        Todo list
      </Text>

      <Input onAddTask={handleAddTask} />

      <View style={styles.TaskList}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DoneButton
              id={item.id}
              text={item.text}
              done={item.done}
              onDoneTask={handleToggleTask}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}