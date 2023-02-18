// import * as React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';

// // You can import from local files
// import AssetExample from './components/AssetsExample';

// // or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>
//         Change code in the editor and watch it change on your phone! Save to get a shareable url.
//       </Text>
//       <Card>
//         <AssetExample />
//       </Card>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/Navigation/Tabs';
const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App