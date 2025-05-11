import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Easing, Alert } from 'react-native';

export default function MedicalAlert() {
  const [anim] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(anim, {
      toValue: 0.8,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.out(Easing.circle),
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.out(Easing.circle),
    }).start(() => {
      Alert.alert(
        'ATENÇÃO',
        'Deseja colocar médicos e enfermeiros em atenção máxima a este paciente?',
        [
          { text: 'Não', onPress: () => console.log('Não') },
          { text: 'Sim', onPress: () => console.log('Sim') },
        ]
      );
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.buttonWrapper, { transform: [{ scale: anim }] }]}>
        <TouchableOpacity
          activeOpacity={1}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.button}
        >
          <Text style={styles.text}>ATENÇÃO</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#D32F2F',
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF',
  },
  alertWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});