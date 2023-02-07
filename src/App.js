import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './navigation';

const App =()=> {
  return (
  <AppNavigator/>
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
export default App;