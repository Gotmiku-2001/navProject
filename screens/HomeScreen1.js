import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

import { Feather } from '@expo/vector-icons'; 
import{
  HeaderButton,
  HeaderButtons,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import { Ionicons} from '@expo/vector-icons';

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // in your app, you can extract the arrow function into a separate component
      // to avoid creating a new one every time you update the options
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="register" iconName="person-add" onPress={() => alert('ลงทะเบียน')} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);


  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Feather name="home" size={30} color='#59cfce' />
      <Text>Home Screen</Text>
      <Button  
        title='OPEN DRAWER'
        onPress={()=> navigation.openDrawer()}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})