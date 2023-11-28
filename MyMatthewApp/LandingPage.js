import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';

const LandingPage = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToRegistration = () => {
    navigation.navigate('Register');
  };

  
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Card style={{ padding: 20, width: '80%' }}>
        <Card.Title title="Welcome to MyMatthewApp!" titleStyle={{ fontSize: 16, textAlign: 'center' }} />
        <Card.Content>
          <Text style={{ marginBottom: 20, textAlign: 'center' }}>
            Experience the best app ever!
          </Text>
          <Button mode="contained" onPress={goToLogin} style={{ marginBottom: 10 }}>
            Login
          </Button>
          <Button mode="outlined" onPress={goToRegistration}>
            Register
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default LandingPage;
