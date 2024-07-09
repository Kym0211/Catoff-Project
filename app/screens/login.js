import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, ActivityIndicator, Button, StatusBar, TouchableOpacity, StyleSheet } from "react-native";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "../styles/loginStyles";

export default function Login({ navigation }) {
    const [container, header, body, input, passwordContainer, icon, button, buttonText] = [styles.container, styles.header, styles.body, styles.input, styles.passwordContainer, styles.icon, styles.button, styles.buttonText];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            alert('User logged in');
            navigation.navigate('GameCard');
        } catch (error) {
            console.log(error);
            alert('Invalid email or password');
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            alert('User created');
            navigation.navigate('GameCard');
        } catch (error) {
            console.log(error);
            alert('Error creating user');
        } finally {
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={container}>
            <View style={header}>
                <Text style={headerText}>To continue, please login first</Text>
            </View>
            <View style={body}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={input}
                    placeholderTextColor="#aaa"
                />
                <View style={passwordContainer}>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        style={[input, { paddingRight: 50 }]}
                        placeholderTextColor="#aaa"
                    />
                    <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color="#aaa"
                        style={icon}
                        onPress={toggleShowPassword}
                    />
                </View>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <>
                        <TouchableOpacity style={button} onPress={signIn}>
                            <Text style={buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button} onPress={signUp}>
                            <Text style={buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </SafeAreaView>
    )
}
