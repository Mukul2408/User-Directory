import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput, ImageBackground, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const UserList = ({ navigation }) => {

  const [data, getdata] = useState([]);
  const [Search, setSearch] = useState('');

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(Search.toLowerCase())
  );

  const API = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    let result = await fetch(url);
    result = await result.json();
    getdata(result);
  };

  useEffect(() => {
    API();
  }, []);

  const renderItem = ({ item }) => (
    <View  style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', { userId: item.id })}>
        <Image
        source={require('../assets/user.png')}
        style={styles.image}
        />
        <Text style={styles.name}>Name : {item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Details', { userId: item.id })}>
        <Text style={styles.email}>Email : {item.email}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <ImageBackground source={require('../assets/back.jpg')} style={{height:'100%'}}>
        <Text style={styles.text}>User-Directory</Text>
        <TextInput
          style={styles.input}
          placeholder="Search User"
          onChangeText={(text) => setSearch(text)}
        />
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>

    </View>
  )
};

export default UserList

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight:'bold'
  },
  container: {
    padding: 20,
    borderBottomColor: 'black ',
    borderBottomWidth: 5,
    borderRadius: 60,
    alignItems:'center',

  },
  name: {
    fontSize: 30,
    color: 'white',
  },
  email: {
    fontSize: 25,
    color: 'white',
  },
  input: {
    color: 'white',
    height: 40,
    borderColor: 'black',
    borderWidth: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  image:{
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
  },
})