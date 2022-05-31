import { Button } from '@rneui/base';
import { Input } from '@rneui/themed';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    console.log('Logado');
  };

  const onRegister = () => {
    console.log('Logado');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={{
            uri: 'https://th.bing.com/th/id/OIP.jDhdZhWkXr7xDIRtvXEcEQHaHa?pid=ImgDet&rs=1',
          }}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />

        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}>
          <Text style={styles.message}>Mal Vindo</Text>
        </Animatable.View>
      </View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Input
          placeholder="Login"
          value={login}
          onChangeText={setLogin}
          style={styles.input}
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          inputStyle={styles.input}
        />
        <Button
          title="Login"
          onPress={onLogin}
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
          color="#38A69D"
        />
        <Button
          title="Cadastro"
          type="outline"
          onPress={onRegister}
          buttonStyle={styles.buttonRegister}
          titleStyle={styles.registerText}
          color="#A1A1A1"
        />
      </Animatable.View>
      {/* <View style={styles.containerFooter}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#38A69D' },
  containerLogo: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  containerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FDFDFD',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    paddingBottom: 12,
  },
  input: {
    height: 40,
    marginBottom: 12,
  },
  button: {
    borderRadius: 5,
    marginVertical: 8,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    color: '#FDFDFD',
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
    borderColor: '#38A69D',
    borderRadius: 5,
  },
  registerText: {
    color: '#38A69D',
  },
});
