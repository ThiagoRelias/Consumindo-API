import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFilme } from '../hooks/useFilmes';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { data: filme, isLoading, isError } = useFilme(id);

  if (isLoading) return <ActivityIndicator size="large" color="#EF3E23" style={{ flex: 1 }} />;
  if (isError || !filme) return <Text style={styles.erro}>Erro ao carregar o filme.</Text>;

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{ uri: filme.capa }} style={styles.capa} />
        <TouchableOpacity style={styles.voltar} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.titulo}>{filme.nome}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.meta}>{filme.ano}</Text>
          <Text style={styles.meta}>·</Text>
          <Text style={styles.meta}>{filme.duracao}</Text>
          <Text style={styles.meta}>·</Text>
          <Text style={styles.classificacao}>{filme.classificacao}</Text>
        </View>

        <TouchableOpacity style={styles.btnPrimario}>
          <Ionicons name="play" size={18} color="#fff" />
          <Text style={styles.btnPrimarioTxt}>Assistir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecundario}>
          <Ionicons name="add" size={20} color="#000" />
          <Text style={styles.btnSecundarioTxt}>Minha lista</Text>
        </TouchableOpacity>

        <View style={styles.divisor} />
        <Text style={styles.secao}>SINOPSE</Text>
        <Text style={styles.sinopse}>{filme.sinopse}</Text>
        <View style={styles.divisor} />

        <View style={styles.linha}>
          <Text style={styles.label}>Gênero</Text>
          <Text style={styles.valor}>{filme.genero}</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.label}>Direção</Text>
          <Text style={styles.valor}>{filme.diretor}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  capa: {
    width: '100%',
    height: 270,
    backgroundColor: '#E6E6E6',
    borderBottomWidth: 2,
  },
  voltar: {
    position: 'absolute',
    top: 44,
    left: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
  },
  content: {
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  meta: {
    fontSize: 14,
    color: '#333',
  },
  classificacao: {
    color: '#EF3E23',
    borderWidth: 1,
    borderColor: '#EF3E23',
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 12,
  },
  btnPrimario: {
    backgroundColor: '#EF3E23',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 16,
    marginBottom: 10,
  },
  btnPrimarioTxt: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  btnSecundario: {
    borderWidth: 1,
    borderColor: '#777',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 16,
  },
  btnSecundarioTxt: {
    fontWeight: '700',
    fontSize: 16,
  },
  divisor: {
    height: 2,
    backgroundColor: '#BBB',
    marginVertical: 16,
  },
  secao: {
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 8,
  },
  sinopse: {
    fontSize: 15,
    lineHeight: 22,
  },
  linha: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  label: {
    width: 100,
    color: '#555',
  },
  valor: {
    flex: 1,
  },
  erro: {
    padding: 24,
    color: '#EF3E23',
  },
});
