import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        height: 40,
        margin: 12,
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
    },

    ListText: {
        color: '#000',
        fontSize: 18,
        padding: 10,
    },

    textDecoration: {
        textDecorationLine: 'line-through',
    }

})

export default styles;