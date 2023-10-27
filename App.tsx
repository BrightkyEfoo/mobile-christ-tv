import 'react-native-gesture-handler';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/home/Home';
import About from './src/screens/About/About';
import CustomDrawer from './src/screens/CustomDrawer/CustomDrawer';
import NavBar from './src/components/NavBar/NavBar';
import Emission from './src/screens/Emission/Emission';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer  >
      <Drawer.Navigator screenOptions={{header : (props) => <NavBar {...props}/>}} initialRouteName="Home" drawerContent={(props)=> <CustomDrawer {...props}/>}>
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="about" component={About} />
        <Drawer.Screen name="emissions" component={Emission} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
