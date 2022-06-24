import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button, Alert, SafeAreaView, SectionList, FlatList } from 'react-native';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import axios from 'axios';

//  ------------------------------------------------------------IMPORTS-----------------------------------------------------------------
/*<FlatList
data={alumnos}
renderItem={({item})=><Text>{item.Nombre}</Text>}/>*/
export default function App() {
  console.log("Buenas")
  const [alumnos, setAlumnos] = useState([])
  useEffect(() => {
    async function getAllAlumnos() {
      try {
        console.log('hola')
        const alumnos = await axios.get('http://10.0.2.2:8000/api/alumno/')
        console.log(alumnos.data)
        setAlumnos(alumnos.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllAlumnos()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Presente" component={PresenteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
console.log('xhau')
// --------------------------------------------INICIA SESION-------------------------------------------------------------------------
function LoginScreen() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState(undefined);
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg' }}
        style={{
          marginTop: 50,
          width: 200,
          height: 120,
        }}
      />
      <Text style={styles.text}>Iniciar Sesion</Text>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ingrese su CUIL"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ingrese su contraseña"
        //keyboardType="text"
        />
      </View>

      <Button
        title="Log in"
        color="#525252"
        onPress={() => navigation.navigate('Presente')}
      //onPress={() => Alert.alert('Simple Button pressed')}
      />

      <Text style={styles.minitext}>¿No tenes una cuenta ya registrada?
        <Button
          title="Presiona aquí para registrarte"
          onPress={() => navigation.navigate('Signin')}
        />
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

//---------------------------------------------------REGISTRARSE---------------------------------------------------------------------
function SigninScreen() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState(undefined);
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg' }}
        style={{
          marginTop: 50,
          width: 200,
          height: 120,
        }}
      />
      <Text style={styles.text}>Registrate</Text>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ingrese su CUIL"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ingrese su contraseña"
        //keyboardType="text"
        />
      </View>

      <Button
        title="Sign In"
        color="#525252"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

      <Text style={styles.minitext}>¿Ya tenes una cuenta?
        <Button
          title="Presiona aquí para iniciar sesion"
          onPress={() => navigation.navigate('Login')}
        />
      </Text>
    </View>

  );
}

//----------------------------------------------------PRESENCIA---------------------------------------------------------------------
const DATA = [
  {
    title: "Alumnos",
    data: ["Fau"]
  }
]
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function PresenteScreen() {
  //const navigation = useNavigation();
  return (
    <View>
    <SafeAreaView>
    <Text style={{ fontSize: 20, marginVertical: 10 }}>
      Curso: 5IA    Bloque: 2    Materia: Proyecto
    </Text>
    <SectionList style={styles.mainStart}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.title}>{title}</Text>
      )}
    />
  </SafeAreaView>
  </View>
  );
}

const Stack = createNativeStackNavigator();

//  ------------------------------------------------------------STYLES-------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 70,
    alignItems: 'center',
  },

  text: {
    color: '#202e99',
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  minitext: {
    marginTop: 40,
    color: 'white',
    padding: 50,
    backgroundColor: '#202e99'
  },

  title: {
    fontSize: 24
  },

  item: {
    backgroundColor: "#d1d1d1",
    padding: 20,
    marginVertical: 0.5,
  }

});


