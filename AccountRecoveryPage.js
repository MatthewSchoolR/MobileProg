import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';

const AccountRecoveryPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const handleAccountRecovery = () => {
    // Implement your account recovery logic here
    console.log('Recovering account with:', email);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Card style={{ padding: 20, width: '80%' }}>
        <Card.Title title="Account Recovery" titleStyle={{ fontSize: 24 }} />
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            style={{ marginBottom: 20 }}
          />
          <Button mode="contained" onPress={handleAccountRecovery} style={{ marginBottom: 10 }}>
            Recover Account
          </Button>
          <Button mode="outlined" onPress={goToLogin}>
            Back to Login
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default AccountRecoveryPage;
