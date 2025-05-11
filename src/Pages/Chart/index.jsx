import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Check from "../../Components/Check";
import BasicInformationPacient from "../../Components/BasicInformationPacient";
import Routine from "../../Components/Routine";
import Sickness from "../../Components/Sickness";
import MedicalAlert from "../../Components/MedicalAlert";

const { width: screenWidth } = Dimensions.get('window');
const AUTO_NAV_MINUTES = 20;

export default function Chart() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => navigation.navigate('PacientList'), AUTO_NAV_MINUTES * 60000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} activeOpacity={0.8}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <Check value="Checagem" route="Checking" />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileSection}>
          <Image source={require('../../Assets/img/avatar.jpeg')} style={styles.avatar} />
          <Text style={styles.name}>Nome do Paciente</Text>
          <View style={styles.alertWrapper}>
            <MedicalAlert />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Informações básicas</Text>
          <BasicInformationPacient />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Queixas / Sinais</Text>
          <Sickness />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Rotina</Text>
          <Routine />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // pastel blue
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#81C784', // pastel green
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
  },
  backText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: screenWidth * 0.25,
    height: screenWidth * 0.25,
    borderRadius: (screenWidth * 0.25) / 2,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#424242',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 12,
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
    width: '100%',
    alignItems: 'center'
  },
});
