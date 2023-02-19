import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
const FourthScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Fourth Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Click!!')} />
    </View>
  );
};

export default FourthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
