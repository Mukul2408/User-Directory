import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const UserDetail = ({ route,navigation }) => {
  const { userId } = route.params; 
  const [user, setUser] = useState(null);

  const fetchUserDetails = async () => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const result = await fetch(url);
    const userData = await result.json();
    setUser(userData);
  };

  useEffect(() => {
    if (userId) fetchUserDetails();
  }, [userId]);

  if (!userId) {
    return <Text style={{ textAlign: 'center', marginTop: 50 }}>User ID not found!</Text>;
  }
  if (!user) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  return (
    <View>
      <ImageBackground source={require('../assets/back.jpg')} style={{ height: '100%' }}>
        <Text style={styles.title}> User-Detail </Text>
        <View style={styles.container}>
        <Text style={styles.data}>Name : {user.name}</Text>
        <Text style={styles.data}>Email : {user.email}</Text>
        <Text style={styles.data}>Phone : {user.phone}</Text>
        <Text style={styles.data}>Company : {user.company.name}</Text>
        <Text style={styles.data}>Address : {user.address.street} , {user.address.city} , {user.address.zipcode}</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('List')}>
        <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  text:{
    fontSize:50,
    fontWeight:'bold',
    textAlign:'right',
    marginRight:15,
    color:'black',

  },
  title: {
    fontSize: 60,
    color: 'black',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight:'bold'
  },
  container: {
   borderRadius:50,
   borderWidth:5,
   padding:15,
  },
  data: {
    fontSize:30,
    marginVertical: 5,
    color:'black',
    fontWeight:'500'
    },
  loading: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
  },
});
