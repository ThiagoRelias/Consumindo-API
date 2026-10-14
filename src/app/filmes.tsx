import { useRouter } from 'expo-router';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import FilmeCard from '../components/FilmeCard';
import { useFilmes } from '../hooks/useFilmes';

export default function Filmes() {
  const router = useRouter();
  const { data, isLoading, isError, refetch } = useFilmes();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>SENAIFLIX</Text>
      </View>
      <Text style={styles.title}>Catálogo</Text>

      {isLoading && <ActivityIndicator size="large" color="#EF3E23" style={{ marginTop: 32 }} />}

      {isError && (
        <Text style={styles.erro} onPress={() => refetch()}>
          Erro ao carregar. Toque para tentar de novo.
        </Text>
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <FilmeCard
            filme={item}
            onPress={() => router.push({ pathname: '/details', params: { id: String(item.id) } })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 14,
    borderBottomWidth: 2,
  },
  logo: {
    fontSize: 24,
    fontWeight: '900',
    color: '#EF3E23',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  erro: {
    padding: 16,
    color: '#EF3E23',
    fontWeight: '600',
  },
});
