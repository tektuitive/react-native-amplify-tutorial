import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialIcons';

import useForm from '../useForm';
import {validateEmail, validatePassword} from '../validation';

import {FormStyles} from '../styles/FormStyles';

export default function SignIn(props) {
  const initialValues = {email: '', password: ''};

  const {values, onSubmit, onChange, errors} = useForm(
    onSubmitSignin,
    initialValues,
    validateSignup,
  );

  const [error, setError] = React.useState();

  async function onSubmitSignin() {
    const {email, password} = values;
    try {
      const user = await Auth.signIn({
        username: email,
        password,
      });
      props.onStateChange('signedIn', user);
    } catch (error) {
      setError(error.message);
    }
  }

  function validateSignup() {
    const errors = {};
    errors.email = validateEmail(values.email);
    errors.password = validatePassword(values.password);
    return errors;
  }

  if (props.authState === 'signIn')
    return (
      <View style={FormStyles.container}>
        <View style={FormStyles.bgcontaineir}>
          <Text style={FormStyles.title}>SIGN IN</Text>
          <View style={FormStyles.labelWrapper}>
            <Icon name="email" size={13} style={FormStyles.labelIcon} />
            <Text style={FormStyles.labelText}> Email </Text>
          </View>
          <TextInput
            style={FormStyles.textbox}
            autoCompleteType="email"
            onChangeText={(text) => onChange({name: 'email', value: text})}
            value={values.email}
            placeholder="Enter Email"
          />
          {errors.email && <Text style={FormStyles.error}>{errors.email}</Text>}
          <View style={FormStyles.labelWrapper}>
            <Icon name="lock" size={13} style={FormStyles.labelIcon} />
            <Text style={FormStyles.labelText}> Password</Text>
          </View>
          <TextInput
            style={FormStyles.textbox}
            autoCompleteType="password"
            onChangeText={(text) => onChange({name: 'password', value: text})}
            value={values.password}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          {errors.password && (
            <Text style={FormStyles.error}>{errors.password}</Text>
          )}
          <TouchableOpacity style={FormStyles.button} onPress={onSubmit}>
            <Text style={FormStyles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>

          <View style={FormStyles.formLinks}>
            <TouchableWithoutFeedback
              onPress={() => props.onStateChange('signUp', {})}>
              <Text style={FormStyles.linkText}>Sign Up</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => props.onStateChange('forgotPassword', {})}>
              <Text style={FormStyles.linkText}>Forgot Password</Text>
            </TouchableWithoutFeedback>
          </View>
          {error && <Text style={FormStyles.error}>{error}</Text>}
        </View>
      </View>
    );
  else return <></>;
}
