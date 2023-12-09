import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';

const HomePage = ({ navigation }) => {
  const logout = () => {
    // Implement your logout logic here
    console.log('Logging out...');
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Card style={{ padding: 20, width: '80%' }}>
        <Card.Title title="Home" titleStyle={{ fontSize: 24 }} />
        <Card.Content>
          <Text style={{ marginBottom: 20 }}>Welcome to the Home Page!</Text>
          <Button mode="contained" onPress={logout} style={{ marginBottom: 10 }}>
            Logout
          </Button>
          <Button mode="outlined" onPress={() => alert('Some action')}>
            Another Action
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HomePage;
