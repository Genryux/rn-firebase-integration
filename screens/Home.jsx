import React from 'react';
import { View, Button, Text, StyleSheet, Pressable } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login'); // Redirect to the Sign-In screen
    } catch (error) {
      console.log('Error signing out: ', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to the Dashboard!</Text>

      <Pressable style={styles.button} onPress={handleSignOut}>
        <Text style={{fontWeight: 'bold', color: '#f6f7f8', fontSize: 16}}>Sign out</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },

    button: {
      height: 48,
      width: 100,
      backgroundColor: '#007BFF',
      marginVertical: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
  }
    
})

