import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StackTecnologia, StackEsportes, StackGames } from './StackNavigator';

const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Tecnologia" component={StackTecnologia} options={{tabBarIcon: ({ color, size }) => (<FontAwesome name="microchip" size={size} color={color} />),}}/>
      <Tab.Screen name="Esportes" component={StackEsportes} options={{tabBarIcon: ({ color, size }) => (<FontAwesome name="trophy" size={size} color={color} />),}}/>
      <Tab.Screen name="Games" component={StackGames} options={{tabBarIcon: ({ color, size }) => (<FontAwesome name="gamepad" size={size} color={color} />),}}/>
    </Tab.Navigator>
  );
}
