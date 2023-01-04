import {View,Text, StyleSheet} from 'react-native'
import { LineChart } from 'react-native-charts-wrapper'

export const ReactNativeChartsWrapper = () => {
    return (
        <View>
            <Text>Stacked Bar Chart</Text>
            <LineChart style={styles.chart}
                       data={{dataSets:[{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}}
            />
        </View>
    )
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

// https://blog.logrocket.com/the-top-8-react-native-chart-libraries-for-2021/#:~:text=react%2Dnative%2Dcharts%2Dwrapper

// https://www.npmjs.com/package/react-native-charts-wrapper