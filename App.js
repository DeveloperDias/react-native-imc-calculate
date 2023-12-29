import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Title from './src/components/Title';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Title/>
      </View>

      <Main/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

});
