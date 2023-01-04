import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Charts } from './src/charts';
import {ReactNativeChartsWrapper} from "./src/react-native-charts-wrapper";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*<Charts />*/}
      <ReactNativeChartsWrapper/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
