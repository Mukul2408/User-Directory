import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import UserList from './component/List';
import UserDetail from './component/Detail';



const Stack = createNativeStackNavigator();

const UserDirectory = ({navigation}) => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="List" component={UserList}/>
      <Stack.Screen name="Details" component={UserDetail} />
    </Stack.Navigator>
  </NavigationContainer>  
  )
}

export default UserDirectory;

const styles = StyleSheet.create({})