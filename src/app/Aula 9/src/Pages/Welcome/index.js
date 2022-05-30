import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const Welcome = () => {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={{
            uri: 'https://th.bing.com/th/id/OIP.jDhdZhWkXr7xDIRtvXEcEQHaHa?pid=ImgDet&rs=1',
          }}
          style={{ width: 250, height: 250, borderRadius: 125 }}
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={[styles.tittle]}>Bem Vindo</Text>
        <Text style={[styles.text]}>
          Texto pra encher linguiça nesse campo.
        </Text>
        <Button
          title="Para tela de Login"
          onPress={navigateTo}
          color="#38A69D"
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#38A69D' },
  containerLogo: { flex: 2, justifyContent: 'center', alignItems: 'center' },
  containerForm: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    alignItems: 'center',
  },
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    paddingBottom: 12,
  },
  text: {
    color: '#A1A1A1',
  },
  button: {
    position: 'absolute',
    borderRadius: 50,
    width: '60%',
    bottom: '15%',
  },
  buttonText: {
    fontSize: 18,
    color: '#FDFDFD',
    paddingVertical: 5,
  },
});
