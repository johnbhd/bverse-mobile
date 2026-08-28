import { StyleSheet, View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Bverse for you</Text>
        </View>
        <View style={styles.content}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container: {
    backgroundColor: '#b5b1b1',
    width: '80%',
    height: '50%',
    alignItems: 'center',
    borderRadius: 20,
  },
  header: {
    backgroundColor: '#000000',
    width: '100%',
    alignItems: 'center',
    padding: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 22,
    color: 'white'
  },

  content: {

  }
});