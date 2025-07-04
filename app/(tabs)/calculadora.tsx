import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function CalculadoraScreen() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  const toNum = (val: string) => parseFloat(val) || 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput
        placeholder="Número 1"
        keyboardType="numeric"
        value={n1}
        onChangeText={setN1}
        style={styles.input}
      />
      <TextInput
        placeholder="Número 2"
        keyboardType="numeric"
        value={n2}
        onChangeText={setN2}
        style={styles.input}
      />

      <View style={styles.buttons}>
        <Button title="+" onPress={() => setResultado(toNum(n1) + toNum(n2))} />
        <Button title="-" onPress={() => setResultado(toNum(n1) - toNum(n2))} />
        <Button title="×" onPress={() => setResultado(toNum(n1) * toNum(n2))} />
        <Button
          title="÷"
          onPress={() => {
            const divisor = toNum(n2);
            if (divisor !== 0) {
              setResultado(toNum(n1) / divisor);
            } else {
              alert("No se puede dividir por 0");
            }
          }}
        />
      </View>

      <Text style={styles.result}>Resultado: {resultado ?? "---"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#121212", // FONDO OSCURO
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "white", // LETRA BLANCA
  },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 8,
    fontSize: 18,
    color: "white", // NÚMEROS EN BLANCO
    borderColor: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  result: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    color: "white", // RESULTADO EN BLANCO
  },
});
