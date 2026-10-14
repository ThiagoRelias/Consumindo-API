import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Filme } from '../types/filme';

type Props = { filme: Filme; onPress: () => void };

export default function FilmeCard({ filme, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image 
        source={{ uri: filme.poster || filme.capa }} 
        style={styles.poster} 
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.nome} numberOfLines={1}>
          {filme.nome}
        </Text>
        <Text style={styles.meta}>
          {filme.ano} · {filme.duracao}
        </Text>
        <View style={styles.chipContainer}>
          <Text style={styles.chipText}>
            {filme.genero}
          </Text>
        </View>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    backgroundColor: '#F2F2F2',
  },
  poster: {
    width: 66,
    height: 92,
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#999',
  },
  info: {
    flex: 1,
    gap: 6,
  },
  nome: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
  },
  meta: {
    fontSize: 13,
    color: '#555',
  },
  chipContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9E9E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  chipText: {
    fontSize: 12,
    color: '#333',
  },
});