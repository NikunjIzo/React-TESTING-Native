import React, { useState } from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [message, setMessage] = useState("Hello from me");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button
        title="Click Me"
        onPress={() => setMessage("React Native CI/CD ")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});