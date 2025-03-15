import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// домашняя страница
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Домашняя страница</Text>
      <Button
        title="К деталям"
        onPress={() => navigation.navigate('Details', { message: 'Добро пожаловать домой!' })}
      />
    </View>
  );
}

// экран деталей
function DetailsScreen({ route }) {
  const { message } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Окно деталей</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

// профиль
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Окно профиля</Text>
    </View>
  );
}

// СтакНавигатор
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerTitle: () => (
            <View style={styles.customHeader}>
              <Text style={styles.headerText}>Кастомный заголовок</Text>
            </View>
          )
        }}
      />
    </HomeStack.Navigator>
  );
}

// ТабНавигатор
const Tab = createBottomTabNavigator();
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{ title: 'Дом' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs /> </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#666',
  },
  customHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});