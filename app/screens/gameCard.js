import React from "react";
import { View, Text, SafeAreaView, SectionList, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/gameCardStyles";

export default function GameCard({ navigation }) {
    const [container, header, card, cardContent, cardTitle, cardDescription, image] = [styles.container, styles.header, styles.card, styles.cardContent, styles.cardTitle, styles.cardDescription, styles.image];

    const games = [
        {
            title: 'Fitness Games',
            data: [
                {
                    name: 'Walking',
                    description: 'Walk 2km to complete the game',
                    img: '../../assets/fitnessGames.jpg',
                    type: 'fitness'
                },
                {
                    name: 'Running',
                    description: 'Run 2km to complete the game',
                    img: '../../assets/fitnessGames.jpg',
                    type: 'fitness'
                },
                {
                    name: 'Cycling',
                    description: 'Cycle 2km to complete the game',
                    img: '../../assets/fitnessGames.jpg',
                    type: 'fitness'
                },
                {
                    name: 'Jogging',
                    description: 'Jog 2km to complete the game',
                    img: '../../assets/fitnessGames.jpg',
                    type: 'fitness'
                },
            ]
        },
        {
            title: 'Creative Games',
            data: [
                {
                    name: 'Drawing',
                    description: 'Show your creativity by drawing a picture',
                    img: '../../assets/creativeGames.jpg',
                    type: 'creative'
                },
                {
                    name: 'Writing',
                    description: 'Improve your writing skills by writing a short story',
                    img: '../../assets/creativeGames.jpg',
                    type: 'creative'
                },
                {
                    name: 'Photography',
                    description: 'Capture the beauty of nature by taking a picture of a flower',
                    img: '../../assets/creativeGames.jpg',
                    type: 'creative'
                }
            ]
        },
        {
            title: 'Miscellaneous Games',
            data: [
                {
                    name: 'Chess',
                    description: 'Checkmate your opponent to win the game',
                    img: '../../assets/miscGames.jpg',
                    type: 'misc'
                },
                {
                    name: 'Checkers',
                    description: 'Show your strategic skills by winning the game',
                    img: '../../assets/miscGames.jpg',
                    type: 'misc'
                },
                {
                    name: 'Poker',
                    description: 'Create the best hand to win the game',
                    img: '../../assets/miscGames.jpg',
                    type: 'misc'
                }
            ]
        },
    ]

    function toggle(name, description, img, type) {
        return () => {
            navigation.navigate('Details', {
                name: name,
                description: description,
                img: img,
                type: type
            });
        }
    }

    return (
        <SafeAreaView style={container}>
            <SectionList
                sections={games}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <TouchableOpacity style={card} onPress={toggle(item.name, item.description, item.img, item.type)}>
                        <View style={cardContent}>
                            <View style={styles.textContainer}>
                                <Text style={cardTitle}>{item.name}</Text>
                                <Text style={cardDescription}>{item.description}</Text>
                            </View>
                            {item.type === 'fitness' && <Image source={require('../../assets/fitnessGames.jpg')} style={image} />}
                            {item.type === 'creative' && <Image source={require('../../assets/creativeGames.jpg')} style={image} />}
                            {item.type === 'misc' && <Image source={require('../../assets/miscGames.jpg')} style={image} />}
                        </View>
                    </TouchableOpacity>
                )}
                renderSectionHeader={({ section }) => <Text style={header}>{section.title}</Text>}
            />
        </SafeAreaView>
    )
}
