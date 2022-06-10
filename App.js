import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';

export default function App() {
  return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg' }}
          style={{
            width: 260,
            height: 150,
          }}
          />
        <Text style={styles.text}>Iniciar Sesion</Text>

      <View style={{alignItems: 'flex-start'}}>
        <TextInput style={styles.input}
          //onChangeText={text => onChangeText(text)}
          value={Number} placeholder="Ingrese su CUIL          ">
        </TextInput>

        <TextInput style={styles.input}
          //onChangeText={text => onChangeText(text)}
          value={Text} placeholder="Ingrese su contraseña">
        </TextInput>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 70,
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    marginTop: 60,
    fontSize: 25,
    padding: 7,
    paddingHorizontal: 40,
    borderRadius: 20,
    backgroundColor: '#202e99',
  },

  input: {
    height: 40,
    margin: 40,
    borderColor: 'grey',
    borderBottomWidth: 2,
    paddingHorizontal: 50,
  }

});
