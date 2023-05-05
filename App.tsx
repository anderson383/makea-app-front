import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { IndexPage } from './src/pages';
import store from './src/core/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <IndexPage />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
