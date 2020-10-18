import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {FormStyles} from '../styles/FormStyles';
import useForm from '../useForm';
import {validateEmail, validateCode} from '../validation';

export default function ConfirmSignUp(props) {
  const initialValues = {email: '', code: ''};

  const {values, onSubmit, onChange, errors} = useForm(
    confirmSignUp,
    initialValues,
    validateSignup,
  );

  const [error, setError] = React.useState();

  async function confirmSignUp() {
    const {email: username, code} = values;
    try {
      await Auth.confirmSignUp(username, code);
      props.onStateChange('signIn', {});
    } catch (err) {
      setError(err.message);
    }
  }

  function validateSignup() {
    const errors = {};
    errors.email = validateEmail(values.email);
    errors.code = validateCode(values.code);
    return errors;
  }

  return (
    <View style={FormStyles.container}>
      <View style={FormStyles.bgcontainer}>
        <Text style={FormStyles.title}>Confirm Signup</Text>
        <Text style={{textAlign: 'center'}}>
          Check your email for confirmation code.
        </Text>
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
          <Text style={FormStyles.labelText}> Confirmation Code *</Text>
        </View>

        <TextInput
          style={FormStyles.textbox}
          placeholder="Enter your confirmation code"
          placeholderTextColor="#808389"
          type="text"
          value={values.code}
          onChangeText={(text) => onChange({name: 'code', value: text})}
        />
        {errors.code && <Text style={FormStyles.error}>{errors.code}</Text>}

        <TouchableOpacity style={FormStyles.button} onPress={onSubmit}>
          <Text style={FormStyles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <View style={FormStyles.formLinks}>
          <TouchableWithoutFeedback
            onPress={() => props.onStateChange('signIn', {})}>
            <Text style={FormStyles.linkText}>Back to Sign In</Text>
          </TouchableWithoutFeedback>
        </View>
        {error && <Text style={FormStyles.error}>{error}</Text>}
      </View>
    </View>
  );
}
