import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
      <ImageBackground
        source={require('@/assets/images/bg-app.jpg')}
        style={styles.screen}
        resizeMode="cover"
      >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Bverse for you</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.verseText}>
            "Blessed are those who hunger and thirst for righteousness, for they will be filled."
          </Text>
          <Text style={styles.verse}>
            Matthew 5:6
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => alert('hi')}
          >
            <LinearGradient
              colors={['#5adaff', '#5468ff']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Next Verse</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
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
    width: '80%',
    height: '50%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#191e1b',
    width: '100%',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    width: '100%',
  },
  verseText: {
    color: 'black',
    textAlign: 'justify',
    fontSize: 17,
    paddingHorizontal: 30,
  },
  
  verse: {
    color: 'black',
    fontSize: 19,
    paddingTop: 20,
    fontWeight: 'bold'
  },

  button: {
    marginTop: 70,
    borderRadius: 6,
    shadowColor: '#2d2342',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },

  buttonGradient: {
    height: 40,
    paddingHorizontal: 25,
    borderRadius: 6,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    color: '#ffffff',
    fontFamily: 'monospace',
    fontSize: 19,
    lineHeight: 19,
  },

});
