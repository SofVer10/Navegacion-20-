import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import StudentCard from '../components/StudentCard ';

const StudentScreen = ({ navigation }) => {
  // Datos del estudiante
  const studentData = {
    fullName: 'Juan Carlos Pérez González',
    age: 18,
    imageUrl: 'https://via.placeholder.com/150x150/4CAF50/FFFFFF?text=JC',
    carnet: '2025001',
    section: 'A',
    year: '3° Año'
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Título de la pantalla */}
        <Text style={styles.screenTitle}>
          Perfil del Estudiante
        </Text>
        
        {/* Card del estudiante usando componente reutilizable */}
        <StudentCard 
          fullName={studentData.fullName}
          age={studentData.age}
          imageUrl={studentData.imageUrl}
          carnet={studentData.carnet}
          section={studentData.section}
          year={studentData.year}
        />

        {/* Información adicional */}
        <View style={styles.additionalInfo}>
          <Text style={styles.infoTitle}>
            Información del Módulo
          </Text>
          <Text style={styles.infoText}>
            Este perfil demuestra el uso de componentes reutilizables 
            en React Native y la navegación entre pantallas utilizando 
            React Navigation.
          </Text>
        </View>

        {/* Botón para regresar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>
            ← Regresar a Inicio
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  additionalInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    textAlign: 'justify',
  },
  backButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StudentScreen;