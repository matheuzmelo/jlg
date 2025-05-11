import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import * as Animatable from 'react-native-animatable';
import { MaskedTextInput } from "react-native-mask-text";
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');
const VALID_COREN = "140.204";

export default function SignIn() {
  const navigation = useNavigation();
  const [coren, setCoren] = useState('');

  const handleSignIn = () => {
    if (!coren) {
      alert('Digite seu número de Coren');
    } else if (coren.length < 6) {
      alert('Quantidade de caracteres inválida');
    } else if (coren === VALID_COREN) {
      navigation.navigate('PacientList');
    } else {
      alert('Número de Coren não registrado');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        animation="slideInRight"
        easing="ease-in-out"
        style={styles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Initial')}
          style={styles.backButton}
          activeOpacity={0.8}
        >
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Acessar</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        easing="ease-in-out"
        delay={400}
        style={styles.form}
      >
        <Text style={styles.label}>Número do Coren</Text>
        <MaskedTextInput
          mask="999.999"
          keyboardType="numeric"
          placeholder="000.000"
          style={styles.input}
          value={coren}
          onChangeText={setCoren}
        />

        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Fazer login</Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#81C784',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  backButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  form: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 20,
    color: '#424242',
    opacity: 0.6,
    marginBottom: 20,
  },
  input: {
    width: screenWidth * 0.7,
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#F1F1F1',
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#81C784',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
  },
});
