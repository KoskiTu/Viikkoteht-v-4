import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../Styles/Style';

type InputProps = {
  onAddTask: (text: string) => void;
};

export function Input({ onAddTask }: InputProps) {
  const [text, setText] = useState<string>('');

  const handleSave = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAddTask(trimmed);
    setText('');
  };

  return (
    <View style={styles.inputRow}>
      <TextInput
        style={[styles.input, styles.inputText]}
        placeholder="Enter task"
        value={text}
        onChangeText={setText}
      />
      <Pressable style={styles.SaveButton} onPress={handleSave}>
        <Text style={styles.SaveButtonText}>Save</Text>
      </Pressable>
    </View>
  );
}