import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';

function Homescreen({navigation,route}){
  React.useEffect(()=>{
    if(route.params?.post){
      //Post updated,do something with 'route.params.post'
      //For Example, sent the post to the server
    }

  },[route.params?.post]);

  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button
        title='Create Post'
        onPress={()=>navigation.navigate('CreatePost')}
      />
      <Text style={{margin: 10}}>Post :{route.params?.post} </Text>
    </View>
  )

}

function Createpostscreen({ navigation, route}){
 const[postText,setPostText] =React.useState('');

 return(
  // use Fragment
  <>
  <TextInput
    multiline
    placeholder='Please text here'
    style={{height:200,padding:10,backgroundColor:'white'}}
    onChangeText={setPostText}
    value={postText}
  />
  <Button
  title='Click'
  onPress={()=>{
    //Pass params bact to HomeScreen funsion
    navigation.navigate('Home',{ post: postText})
  }}
  
  />
  
  
  </>
 );

}



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'#59cfce'},
        headerTintColor:'azure',
        headerTitleStyle:{fintWeight:'bold',fontSize:30}
      }}
      >
        <Stack.Screen name='Home' component={Homescreen}/>
        <Stack.Screen name='CreatePost' component={Createpostscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}