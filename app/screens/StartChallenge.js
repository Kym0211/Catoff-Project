import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { styles } from '../styles/startChallengeStyles';

export default function StartChallenge({ route }) {
    const [container, title, desc, steps, startButton, buttonText] = [styles.container, styles.title, styles.description, styles.steps, styles.startButton, styles.buttonText];

    const { name, description } = route.params;
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [stepCount, setStepCount] = useState(0);
    const [challengeStarted, setChallengeStarted] = useState(false);

    useEffect(() => {
        Pedometer.isAvailableAsync().then(
            result => {
                setIsPedometerAvailable(String(result));
                console.log('Pedometer is available: ' + result);
            },
            error => {
                setIsPedometerAvailable('Could not get isPedometerAvailable: ' + error);
            }
        );
    }, []);

    useEffect(() => {
        let subscription;
        if (challengeStarted) {
            console.log('Starting subscription');
            subscription = Pedometer.watchStepCount(result => {
                setStepCount(result.steps);
                console.log('Step count: ' + result.steps);
            });
        }
        return () => {
            if (subscription) {
                console.log('Removing subscription', subscription);
                subscription.remove();
            }
        };
    }, [challengeStarted]);

    const startChallenge = () => {
        setChallengeStarted(true);
        console.log(challengeStarted, stepCount)
        console.log('Starting challenge');
    }

    return (
        <SafeAreaView style={container}>
            <Text style={title}>{name} Challenge</Text>
            <Text style={desc}>{description}</Text>
            <Text style={steps}>Steps: {stepCount}</Text>
            <TouchableOpacity onPress={startChallenge} style={startButton}>
                <Text style={buttonText}>{challengeStarted ? "Challenge Started" : "Start"}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
