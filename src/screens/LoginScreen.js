import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>PropEasy Login</Title>
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={() => navigation.replace('Dashboard')} // We use 'replace' to prevent going back to login
        style={styles.button}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
});

export default LoginScreen;
