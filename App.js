import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/emph__3x.webp')} style={styles.image} />
      <Image source={require('./assets/images/emph__3x.webp')} style={[styles.image, styles.tintColor]} />
      <Image source={require('./assets/images/emph__3x.webp')} style={styles.image} tintColor="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  image: {
    width: 21,
    height: 19,
  },
  tintColor: {
    tintColor: 'black',
  },
});
