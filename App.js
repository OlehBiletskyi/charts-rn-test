import { StyleSheet, Text, Dimensions } from 'react-native';;
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';


const WIDTH = Dimensions.get('window').width - 16;

export const DEVICE_WIDTH = Dimensions.get('window').width;

export default function App() {
  return (
      <>
        <Text style={styles.header}>Stacked Bar Chart</Text>
        <Text style={styles.subHeader}>react-native-chart-kit</Text>
        <Text style={styles.description}>(doesn`t have events)</Text>
        <StackedBarChart
            data={{
              labels: ['Test1', 'Test2'],
              legend: ['L1', 'L2', 'L3'],
              data: [
                [60, 30, 60],
                [30, 30, 60],
              ],
              barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
            }}
            width={WIDTH}
            height={220}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },

            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
        />
      </>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 16,
    paddingTop: 16,
    marginTop: 16,
  },
    subHeader: {
        textAlign: 'center',
        fontSize: 14,
        paddingHorizontal: 16,
        paddingTop: 16,
        marginTop: 2,
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        paddingHorizontal: 16,
        paddingTop: 16,
        marginTop: 2,
        color: 'red'
    },
});
