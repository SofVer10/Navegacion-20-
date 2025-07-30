import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header con logo */}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/100x100/2196F3/FFFFFF?text=ITR'
            }}
            style={styles.logo}
          />
          <Text style={styles.institutionName}>
            Instituto Técnico Ricaldone
          </Text>
        </View>

        {/* Información del módulo */}
        <View style={styles.moduleInfo}>
          <Text style={styles.moduleTitle}>
            Módulo 3.5: Desarrollo de componentes para dispositivos móviles
          </Text>
          
          <Text style={styles.moduleDescription}>
            Este módulo se enfoca en el desarrollo de aplicaciones móviles 
            utilizando React Native. Los estudiantes aprenden a crear 
            componentes reutilizables, implementar navegación entre pantallas, 
            y desarrollar interfaces de usuario responsivas para dispositivos 
            móviles.
          </Text>

          <View style={styles.moduleDetails}>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Docente:</Text> Ing. Wilfredo Granados
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Especialidad:</Text> Desarrollo de Software
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Nivel:</Text> 3° año de bachillerato
            </Text>
          </View>
        </View>

        {/* Botón de navegación */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Student')}
        >
          <Text style={styles.buttonText}>
            Ver Perfil del Estudiante
          </Text>
        </TouchableOpacity>

        {/* Información adicional */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Tarea de Investigación - Navegación en React Native
          </Text>
        </View>
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
  header: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  institutionName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    textAlign: 'center',
  },
  moduleInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  moduleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 28,
  },
  moduleDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 20,
  },
  moduleDetails: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
  navigationButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});

export default HomeScreen;