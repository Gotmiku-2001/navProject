import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

import { Feather } from '@expo/vector-icons'; 

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Feather name="home" size={30} color='#59cfce' />
      <Text>Home Screen</Text>
      <Button  
        title='Create Post'
        onPress={()=>navigation.navigate('About',{
        email : 'reactnative.tni.ac.th'}
        )}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})