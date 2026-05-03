import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { authService } from '../services/auth';

export default function HomeScreen() {
  const handleSignOut = async () => {
    try {
      await authService.signOut();
    } catch (error) {
      console.error('Error cerrando sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a Savr!</Text>
      <Text style={styles.subtitle}>Autenticación exitosa 🎉</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#1A2420' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 20 },
  subtitle: { fontSize: 18, color: '#CCCCCC', marginBottom: 60 },
  button: { backgroundColor: '#FF4757', paddingHorizontal: 40, paddingVertical: 15, borderRadius: 25 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});