import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        backgroundColor: '#6200ea',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    body: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    input: {
        width: '100%',
        height: 50,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 25,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        alignSelf: 'center',
    },
    passwordContainer: {
        position: 'relative',
        width: '100%',
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: 22,
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        marginVertical: 10,
        backgroundColor: '#6200ea',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
});