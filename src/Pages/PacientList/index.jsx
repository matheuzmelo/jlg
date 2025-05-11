import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  RefreshControl,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');
const initialPatients = [
  { id: '1', name: 'Ana Silva', grave: false },
  { id: '2', name: 'Bruno Costa', grave: false },
  { id: '3', name: 'Carlos Lima', grave: true },
  { id: '4', name: 'Diana Alves', grave: false },
];

export default function PacientList() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [patients, setPatients] = useState(initialPatients);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setPatients(initialPatients);
      setRefreshing(false);
    }, 500);
  }, []);

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Chart', { patientId: item.id })}
      activeOpacity={0.8}
    >
      <Text style={styles.name}>{item.name}</Text>
      {item.grave && <Text style={styles.status}>Grave</Text>}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../Assets/img/avatar.jpeg')}
          style={styles.avatar}
        />
        <Text style={styles.title}>Pacientes</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar pacientes..."
          placeholderTextColor="#757575"
          value={search}
          onChangeText={setSearch}
          clearButtonMode="while-editing"
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.empty}> 
            <Text style={styles.emptyText}>Nenhum paciente encontrado</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // pastel blue from Initial
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#81C784', // pastel green from Initial
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    height: 44,
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#424242',
  },
  list: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    color: '#212121',
  },
  status: {
    fontSize: 14,
    color: '#D32F2F',
    fontWeight: '500',
  },
  empty: {
    alignItems: 'center',
    marginTop: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#757575',
  },
});