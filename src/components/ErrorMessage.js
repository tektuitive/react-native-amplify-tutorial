import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {FormStyles} from '../styles/FormStyles';

export default function ErrorMessage(props) {
  const {error, setError} = props;
  return (
    <View style={[FormStyles.formError]}>
      <View style={FormStyles.errorMsg}>
        <Icon name="error-outline" size={18} style={FormStyles.errorIcon} />
        <Text style={FormStyles.error}>{error}</Text>
      </View>
      <Icon
        name="close"
        size={18}
        style={FormStyles.errorIcon}
        onPress={() => setError()}
      />
    </View>
  );
}
