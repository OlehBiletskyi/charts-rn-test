import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { LineChart } from 'react-native-charts-wrapper';

export default function App() {
    return (
        <>
            <Text>react-native-charts-wrapper</Text>
            <Text>ERROR: Invariant Violation: requireNativeComponent: "RNLineChart" was not found in the UIManager.</Text>
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <LineChart style={styles.chart}
                               data={{dataSets:[{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}}
                    />
                </View>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});