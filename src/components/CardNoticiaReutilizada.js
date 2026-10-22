import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardNoticia({ categoria, titulo, resumo, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.categoria}>{categoria}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.resumo}>{resumo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 10,
  
  },
  categoria: {
    fontSize: 12,
    color: '#6B7280',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  resumo: {
    fontSize: 14,
    color: 'gray',
  },
});