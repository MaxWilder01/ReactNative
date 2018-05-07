import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: '' , apellido: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Ingrese su nombre</Text>
        <TextInput
          editable = {true}
          style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Ingrese su nombre"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
          onChangeText={(nombre) => this.setState({nombre})}
        />
        <Text>Ingrese su Apellido</Text>
        <TextInput
          editable = {true}
          style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               placeholder = " Ingrese su apellido"
               autoCapitalize = "none"
          onChangeText={(apellido) => this.setState({apellido})}
        />
        <Button style={styles.boton} title="Aceptar"
          onPress={() => {
            Alert.alert("Su nombre es " + this.state.nombre + " " + this.state.apellido + ' 🍕');
          }}/>
        <Image
            style={{marginTop: 40, width: 300, height: 300}}
            source={require('./rocket.png')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100
  },
  input: {
      margin: 15,
      height: 40,
      width: 300,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
});
