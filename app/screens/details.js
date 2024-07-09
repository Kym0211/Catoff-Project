import React from "react";
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/detailsStyles";

export default function Details({ route, navigation }) {
    const [container, header, date, title, img, image, body, text, description, footer, note, button, registerButton, buttonText] = [
        styles.container, styles.header, styles.date, styles.title, styles.img, styles.image, styles.body, styles.text, styles.description, styles.footer, styles.note, styles.button, styles.registerButton, styles.buttonText
    ];

    const notes = ['Outdoor Challenge', 'Tracker Device should be on', 'Malpractices will lead to disqualification', 'No use of vehicles allowed', 'No use of any electronic devices'];

    const joinChallenge = () => {
        navigation.navigate('JoinChallenge', {
            name: route.params.name,
            description: route.params.description,
        });
    }

    const getImageSource = () => {
        switch (route.params.type) {
            case 'fitness':
                return require('../../assets/fitnessGames.jpg');
            case 'creative':
                return require('../../assets/creativeGames.jpg');
            case 'misc':
                return require('../../assets/miscGames.jpg');
            default:
                return;
        }
    }

    return (
        <SafeAreaView style={container}>
            <View style={header}>
                <Text style={date}>Starts on {new Date().toLocaleDateString()}</Text>
                <Text style={title}>{route.params.name}</Text>
            </View>
            <View style={img}>
                <Image source={getImageSource()} style={image} />
            </View>
            <View style={body}>
                <Text style={text}>ABOUT THE CHALLENGE</Text>
                <Text style={description}>{route.params.description}</Text>
            </View>
            <View style={footer}>
                <Text style={text}>IMPORTANT NOTES</Text>
                <FlatList
                    data={notes}
                    renderItem={({ item }) => <Text style={note}>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={button}>
                <TouchableOpacity onPress={joinChallenge} style={registerButton}>
                    <Text style={buttonText}>Start</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
