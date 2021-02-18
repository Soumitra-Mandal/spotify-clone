import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign,Ionicons,FontAwesome5  } from '@expo/vector-icons'; 

//import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

//import { AppearanceProvider,Appearance } from 'react-native-appearance';
const Stack = createStackNavigator();

function HomeScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home 1!</Text>
      <Button
        title="Go to 2nd Home"
        onPress={() => navigation.navigate('Home2')}
      />
    </View>
  );
}

function HomeScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home 2!</Text>
      <Button
        title="Go to 1st Home"
        onPress={() => navigation.navigate('Home1')}
      />
    </View>
  );
}


function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen1">
      <Stack.Screen name="Home1" component={HomeScreen1} />
      <Stack.Screen name="Home2" component={HomeScreen2} />
    </Stack.Navigator>
  );
}


function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}

function LibraryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Library!</Text>
    </View>
  );
}
function PremiumScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Premium!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
 /* console.log(Appearance.getColorScheme())*/
  return (
    //<AppearanceProvider>
    <NavigationContainer >
      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
              return <AntDesign name={iconName} size={size} color={color} />;

            } else if (route.name === 'Search') {
              iconName = focused ? 'search1' : 'search1';
              return <AntDesign name={iconName} size={size} color={color} />;

            }
            else if (route.name === 'Library') {
              iconName = focused ? 'library-sharp' : 'library-sharp';
              return <Ionicons name={iconName} size={size} color={color} />;

            }
            else if (route.name === 'Premium') {
              iconName = focused ? 'spotify' : 'spotify';
              return <FontAwesome5  name={iconName} size={size} color={color} />;

            }
          },
        })}
      tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >

        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Premium" component={PremiumScreen} />

      </Tab.Navigator>
    </NavigationContainer>
    //</AppearanceProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  text:{
    fontSize: 20,
    padding:30,
    textAlign: 'center',

  },
});
