import { Text, View ,Button } from 'react-native';
import React from 'react';

import {NavigationContainer,DefaultTheme} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator,
        DrawerContentScrollView,
        DrawerItemList,
        DrawerItem
} from '@react-navigation/drawer';

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,45,85)'
  }
}


function FeedScreen({navigation}) {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>
        Feed Screen
      </Text>
      <Button title='OPEN DAWER' onPress={()=>navigation.openDrawer()}/>
      <Button title='TOGGLE DAWER'onPress={()=>navigation.toggleDrawer()}/>
    </View>
  )
}

function Nontification() {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>
      Nontification
      </Text>
    </View>
  )
}

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label='Close drawer' onPress={()=> props.navigation.closeDrawer()}/>
      <DrawerItem label='Toggle drawer' onPress={()=> props.navigation.toggleDrawer()}/>
    </DrawerContentScrollView>
  );

}

function MyDrawer(){
  return(
    <Drawer.Navigator 
    useLegacyImplementation
    drawerContent={(props)=><CustomDrawerContent {...props}
    />}
    screenOptions ={{
      drawerStyle:{
        width:240
      }
    }}
    >
        <Drawer.Screen name='Feed' component={FeedScreen}/>
        <Drawer.Screen name='Nontification' component={Nontification}/>
      </Drawer.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer  theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App