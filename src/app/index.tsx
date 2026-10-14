import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.banner} />
      <Text style={styles.logo}>SENAIFLIX</Text>
      <Text style={styles.sub}>Filmes e séries ilimitados. Assista onde quiser.</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/filmes')}>
        <Text style={styles.buttonText}>Entrar</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 16, 
    paddingTop: 48
  },
  banner: { flex: 1,
    backgroundColor: '#E6E6E6',
    borderWidth: 2,
    borderColor: '#999',
    marginBottom: 20
       },
  logo: { fontSize: 44,
    fontWeight: '900',
    color: '#EF3E23'
  },
  sub: { fontSize: 16, 
    color: '#222',
    marginTop: 8,
    marginBottom: 20,
    maxWidth: 260 
 },
  button: {
    backgroundColor: '#EF3E23',
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: { color: '#fff',
    fontWeight: '700',
    fontSize: 16
  },
});