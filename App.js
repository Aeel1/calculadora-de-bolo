import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView } from 'react-native';

export default function App() {
  const [primeiro, setPrimeiro] = useState();

  const x = parseFloat(primeiro);
  const recheio = Number (x * 0.35).toFixed(1);
  const cobertura = Number (x * 0.25).toFixed(1);
  const massa = Number (x * 0.30).toFixed(1);
  const calda = Number (x * 0.10).toFixed(1);
 
  return (
    <ScrollView>
    <View style={styles.contanier}>
      <Image style={styles.logo} source={require('/assets/bolo.png')} />
      <Text style={styles.title}>Calculadora de Bolo</Text>
      <Text style={styles.h1}>Digite o peso do bolo em Kg (ex: 1 ou 1.5)</Text>

      <TextInput
      keyboardType="decimal-pad" 
      style={styles.input} 
      value={primeiro} 
      onChangeText={setPrimeiro}
      />

      <Text style={styles.subititle}>Resultado</Text>
      
      <Text style={styles.result}> {'Recheio: ' + recheio + 'kg'}</Text>
      <Text style={styles.result}> {'Cobertura: ' + cobertura + 'kg'}</Text>
      <Text style={styles.result}> {'Massa: ' + massa + 'kg'}</Text>
      <Text style={styles.result}> {'Calda: ' + calda + 'kg'}</Text>
    </View>
    </ScrollView>
  );
  
}

const styles =StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height: 64,
    width: 64,
    marginBottom: 13,
  },
  title: {
    fontSize: 36,
    fontWeight: '100',
  },
  h1: {
    fontSize: 11,
    marginTop: 20,
  },
  input: {
    alignSelf: 'Stretch',
    height: 50,
    fontSize: 30,
    fontWeight: '100',
    backgroundColor: '#DDD',
    marginTop: 5,
    marginHorizontal: 36,
    textAlign: 'center',
  },
  subititle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom:20,
  },
  result: {
    fontWeight: '100',
    fontSize: 24,
  },
});
