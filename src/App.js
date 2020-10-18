/**
 * Authentication with Amplify and React Native App
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from '../aws-exports';
import {Authenticator} from 'aws-amplify-react-native';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import ConfirmSigup from './components/ConfirmSignUp';
import ChangePassword from './components/ChangePassword';

Amplify.configure(awsconfig);

function Home(props) {
  return (
    <View>
      <Text>Welcome</Text>
      <Button title="Sign Out" onPress={() => Auth.signOut()} />
    </View>
  );
}

const AuthScreens = (props) => {
  console.log('props', props.authState);
  switch (props.authState) {
    case 'signIn':
      return <SignIn {...props} />;
    case 'signUp':
      return <SignUp {...props} />;
    case 'forgotPassword':
      return <ForgotPassword {...props} />;
    case 'confirmSignUp':
      return <ConfirmSigup {...props} />;
    case 'changePassword':
      return <ChangePassword {...props} />;
    case 'signedIn':
      return <Home />;
    default:
      return <></>;
  }
};

const App = () => {
  return (
    <View style={styles.container}>
      <Authenticator
        usernameAttributes="email"
        hideDefault={true}
        authState="signUp">
        <AuthScreens />
      </Authenticator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
