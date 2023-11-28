import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { useAuth } from './AuthContext';

const LoginPage = ({ navigation }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const goToLanding = () => {
    navigation.navigate('Landing');
  };

  const goToRegistration = () => {
    navigation.navigate('Register');
  };

  const goToAccountRecoveryPage = () => {
    navigation.navigate('AccountRecovery');
  };

  const handleLogin = async () => {
    // Call the login function from the AuthContext
    const isAuthenticated = await login(username, password);

    if (isAuthenticated) {
      navigation.navigate('Home');
    } else {
      // Handle failed login (show error message, etc.)
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Card style={{ padding: 20, width: '80%' }}>
        <Card.Title title="Login" titleStyle={{ fontSize: 24 }} />
        <Card.Content>
          <TextInput
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={{ marginBottom: 20 }}
          />
          <Button mode="contained" onPress={handleLogin} style={{ marginBottom: 10 }}>
            Login
          </Button>
          <Button mode="outlined" onPress={goToLanding} style={{ marginBottom: 10 }}>
            Back to Landing
          </Button>
          <Button mode="text" onPress={goToRegistration} style={{ marginBottom: 10 }}>
            Register
          </Button>
          <Button mode="text" onPress={goToAccountRecoveryPage}>
            Forgot Password?
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default LoginPage;
