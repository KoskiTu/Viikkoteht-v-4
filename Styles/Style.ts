import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
  },
  inputText: {
    fontSize: 16,
  },
  SaveButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  SaveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  TaskList: {
    backgroundColor: '#f0f0f0',
    marginTop: 20,
    width: '100%',
    borderRadius: 5,
  },
  ListText: {
    color: '#000',
    fontSize: 18,
    padding: 10,
  },
  textDecoration: {
    color: '#000',
    textDecorationLine: 'line-through',
  },
  rowPressable: {
    alignSelf: 'flex-start',
  },
  taskTextWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  strikeLine: {
    position: 'absolute',
    left: 10,
    right: 10,
    top: '55%',
    height: 3,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
});

export default styles;