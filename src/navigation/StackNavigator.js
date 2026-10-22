import { useEffect } from 'react';
import { FlatList, ScrollView, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardNoticiaReutilizada from '../components/CardNoticiaReutilizada';
import { noticiasTecnologia, noticiasEsportes, noticiasGames } from '../data/noticias';

const Stack = createNativeStackNavigator();

function ListaTecnologia({ navigation }) {
  return (
    <FlatList
      style={{ backgroundColor: '#F5F5F5', paddingTop: 16 }}
      data={noticiasTecnologia}
      renderItem={({ item }) => (
        <CardNoticiaReutilizada
          categoria={item.categoria}
          titulo={item.titulo}
          resumo={item.resumo}
          onPress={() => navigation.navigate('Detalhe', { noticia: item })}
        />
      )}
    />
  );
}

function ListaEsportes({ navigation }) {
  return (
    <FlatList
      style={{ backgroundColor: '#F5F5F5', paddingTop: 16 }}
      data={noticiasEsportes}
      renderItem={({ item }) => (
        <CardNoticiaReutilizada
          categoria={item.categoria}
          titulo={item.titulo}
          resumo={item.resumo}
          onPress={() => navigation.navigate('Detalhe', { noticia: item })}
        />
      )}
    />
  );
}

function ListaGames({ navigation }) {
  return (
    <FlatList
      style={{ backgroundColor: '#F5F5F5', paddingTop: 16 }}
      data={noticiasGames}
      renderItem={({ item }) => (
        <CardNoticiaReutilizada
          categoria={item.categoria}
          titulo={item.titulo}
          resumo={item.resumo}
          onPress={() => navigation.navigate('Detalhe', { noticia: item })}
        />
      )}
    />
  );
}

function DetalheNoticia({ route, navigation }) {
  const { noticia } = route.params;

  useEffect(() => {navigation.setOptions({ title: noticia.titulo });}, [navigation, noticia]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Text style={styles.categoria}>{noticia.categoria}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.texto}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}

export function StackTecnologia() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTitleStyle: { fontSize: 20, fontWeight: '500', color: 'black' },
        headerTitleAlign: 'left',
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen name="ListaTecnologia" component={ListaTecnologia} options={{ title: 'Tecnologia' }} />
      <Stack.Screen name="Detalhe" component={DetalheNoticia} />
    </Stack.Navigator>
  );
}

export function StackGames() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTitleStyle: { fontSize: 20, fontWeight: '500', color: 'black' },
        headerTitleAlign: 'left',
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen name="ListaGames" component={ListaGames} options={{ title: 'Games' }} />
      <Stack.Screen name="Detalhe" component={DetalheNoticia} />
    </Stack.Navigator>
  );
}

export function StackEsportes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTitleStyle: { fontSize: 20, fontWeight: '500', color: 'black' },
        headerTitleAlign: 'left',
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen name="ListaEsportes" component={ListaEsportes} options={{ title: 'Esportes' }} />
      <Stack.Screen name="Detalhe" component={DetalheNoticia} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  conteudo: {
    padding: 16,
  },
  categoria: {
    fontSize: 12,
    color: 'gray',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 8,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
    color: 'gray',
  },
});