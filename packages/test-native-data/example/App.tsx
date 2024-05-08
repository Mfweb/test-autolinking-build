import { StyleSheet, Text, View } from 'react-native';

import * as TestNativeData from 'test-native-data';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{TestNativeData.hello()}</Text>
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
