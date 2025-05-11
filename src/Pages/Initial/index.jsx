import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('window');

export default function Initial() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View style={styles.logoWrapper}>
                <Animatable.Image 
                    animation="flipInY"
                    easing="ease-in-out"
                    source={require('../../Assets/img/hospital.png')}
                    resizeMode="contain"
                    style={styles.logo}
                />
            </View>

            <Animatable.View
                animation="fadeInUp"
                easing="ease-in-out"
                delay={600}
                style={styles.formWrapper}
            >
                <View style={styles.texts}>
                    <Text style={styles.title}>JLG</Text>
                    <Text style={styles.subtitle}>Clínica</Text>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                    style={styles.button}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD', // pastel blue
    },
    logoWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: width * 0.4,
        width: width * 0.4,
    },
    formWrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    texts: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 60,
        color: '#424242',
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 18,
        color: '#757575',
        opacity: 0.6,
    },
    button: {
        backgroundColor: '#81C784', // pastel green
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '600',
    }
});
