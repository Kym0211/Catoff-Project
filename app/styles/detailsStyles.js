import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: '#6200ea',
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    img: {
        width: '100%',
        height: 200,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Ensures the image fits within the container
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ensures the image covers the container without repeating
    },
    body: {
        width: '100%',
        padding: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    footer: {
        width: '100%',
        padding: 20,
    },
    note: {
        fontSize: 14,
        color: '#555',
        marginVertical: 5,
    },
    button: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    registerButton: {
        width: '80%',
        backgroundColor: '#6200ea',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
