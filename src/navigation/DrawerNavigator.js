import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();


function TelaSobre({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Image source={require('../../assets/jornal.png')} style={styles.imagem} />
        <Text style={{ fontSize: 18, textAlign: 'center' }}>
          Mini app de noticia, testando algumas coisas  
        </Text>
      </View>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Noticias')}>
        <Text style={styles.textoBotao}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Noticias" component={TabNavigator} options={{title: 'Notícias',drawerIcon: ({ color, size }) => (<FontAwesome name="newspaper-o" size={size} color={color} />),}}/>
      <Drawer.Screen name="Sobre" component={TelaSobre} options={{drawerIcon: ({ color, size }) => (<FontAwesome name="info-circle" size={size} color={color} />),}}/>
      
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 16,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  conteudo: {
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
  },
  botaoVoltar: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});