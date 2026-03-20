import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🚀 My iOS CI App</Text>

      <Text style={styles.subtitle}>
        Built using GitHub Actions + macOS runner 🍏
      </Text>

      <View style={styles.counterBox}>
        <Text style={styles.counter}>{count}</Text>
      </View>

      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  title: {
    fontSize: 26,
    color: '#38bdf8',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#cbd5f5',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  counterBox: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  counter: {
    fontSize: 32,
    color: '#22c55e',
  },
});

export default App;
