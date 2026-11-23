import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from '../Styles/Style';

type DoneButtonProps = {
  id: string;
  text: string;
  done: boolean;
  onDoneTask: (id: string) => void;
};

export function DoneButton({ id, text, done, onDoneTask }: DoneButtonProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
      }}
    >
      <Pressable onPress={() => onDoneTask(id)} style={{ flex: 1 }}>
        <View style={styles.taskTextWrapper}>
          <Text style={styles.ListText}>{text}</Text>
          {done && <View pointerEvents="none" style={styles.strikeLine} />}
        </View>
      </Pressable>

      <Pressable
        onPress={() => onDoneTask(id)}
        style={{
          backgroundColor: done ? '#888' : '#2196F3',
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 14 }}>
          {done ? 'Undo' : 'Done'}
        </Text>
      </Pressable>
    </View>
  );
}