import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { useAuth } from './AuthContext';

const RegistrationPage = ({ navigation }) => {
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegistration = async () => {
    // Call the register function from the AuthContext
    const isRegistered = await register(username, email, password);

    if (isRegistered) {
      // Assuming registration was successful, you can navigate to the login page or perform other actions
      navigation.navigate('Login');
    } else {
      // Handle failed registration (show error message, etc.)
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Card style={{ padding: 20, width: '80%' }}>
        <Card.Title title="Register" titleStyle={{ fontSize: 24 }} />
        <Card.Content>
          <TextInput
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            style={{ marginBottom: 10 }}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={{ marginBottom: 20 }}
          />
          <Button mode="contained" onPress={handleRegistration} style={{ marginBottom: 10 }}>
            Register
          </Button>
          <Button mode="outlined" onPress={goToLogin}>
            Back to Login
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default RegistrationPage;
