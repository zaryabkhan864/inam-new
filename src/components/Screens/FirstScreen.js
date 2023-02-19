import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
const FirstScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.myImage}
          source={require('../../assets/oldMan.png')}
        />
        <View style={styles.myTextDiv}>
          <Text style={styles.myText}>Name: Mr Ahmed</Text>
          <Text style={styles.myText}>Age:55</Text>
          <Text style={styles.myText}>Blood Group:B+</Text>
          <Text style={styles.myText}>Smoker:Non</Text>
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
  myImage: {
    width: 250,
    height: 250,
    borderRadius: 50,
  },
  myTextDiv: {
    padding: 15,
  },
  myText: {
    fontSize: 20,
    margin: 20,
  },
});
