import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const StudentCard = ({ fullName, age, imageUrl, carnet, section, year }) => {
  return (
    <View style={styles.card}>
      {/* Header de la card */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Información del Estudiante</Text>
      </View>

      {/* Contenido principal */}
      <View style={styles.cardContent}>
        {/* Imagen del estudiante */}
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.studentImage} />
        </View>

        {/* Información del estudiante */}
        <View style={styles.studentInfo}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nombre completo:</Text>
            <Text style={styles.value}>{fullName}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Edad:</Text>
            <Text style={styles.value}>{age} años</Text>
          </View>

          {carnet && (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Carné:</Text>
              <Text style={styles.value}>{carnet}</Text>
            </View>
          )}

          {section && (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Sección:</Text>
              <Text style={styles.value}>{section}</Text>
            </View>
          )}

          {year && (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Nivel:</Text>
              <Text style={styles.value}>{year}</Text>
            </View>
          )}
        </View>
      </View>

      {/* Footer de la card */}
      <View style={styles.cardFooter}>
        <Text style={styles.footerText}>Instituto Técnico Ricaldone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    overflow: "hidden",
  },
  cardHeader: {
    backgroundColor: "#2196F3",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  cardContent: {
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  studentImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#2196F3",
  },
  studentInfo: {
    marginTop: 10,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
    minWidth: 120,
  },
  value: {
    fontSize: 16,
    color: "#666",
    flex: 2,
    textAlign: "right",
  },
  cardFooter: {
    backgroundColor: "#f8f9fa",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
  },
  footerText: {
    fontSize: 12,
    color: "#6c757d",
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default StudentCard;
