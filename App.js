import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button, Alert, SectionList } from 'react-native';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// página para iniciar sesion
function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg' }}
        style={{
          width: 260,
          height: 150,
        }}
      />
      <Text style={styles.text}>Iniciar Sesion</Text>

      <View style={{ alignItems: 'flex-start' }}>
        <TextInput style={styles.input}
          //onChangeText={text => onChangeText(text)}
          value={Number} placeholder="Ingrese su CUIL          ">
        </TextInput>

        <TextInput style={styles.input}
          //onChangeText={text => onChangeText(text)}
          value={Text} placeholder="Ingrese su contraseña">
        </TextInput>
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

//página para registrarse
function SigninScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg' }}
        style={{
          width: 260,
          height: 150,
        }}
      />
      <Text style={styles.text}>Registrate</Text>

      <View style={{ alignItems: 'flex-start' }}>
        <TextInput style={styles.input}
          //onChangeText={text => onChangeText(text)}
          value={Number} placeholder="Ingrese su CUIL          ">
        </TextInput>

        <TextInput style={styles.input}
          //onChangeText={text => onChangeText(text)}
          value={Text} placeholder="Ingrese su contraseña">
        </TextInput>
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

//página del paresente/ausente/tarde 
function PresenteScreen() {
  //const navigation = useNavigation();
  return (
    <View>
      <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    </View>


  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Presente" component={PresenteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
    marginTop: 40,
    fontSize: 25,
    padding: 7,
    paddingHorizontal: 40,
    borderRadius: 20,
    backgroundColor: '#202e99',
  },

  input: {
    height: 40,
    margin: 20,
    borderColor: 'grey',
    borderBottomWidth: 2,
    paddingHorizontal: 50,
  },

  minitext: {
    marginTop: 40,
    color: 'white',
    padding: 50,
    backgroundColor: '#202e99'
  }

});


