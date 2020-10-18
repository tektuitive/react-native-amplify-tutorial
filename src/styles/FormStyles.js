import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const fullWidth = Dimensions.get('window').width; //full width

export const deepSquidInk = '#152939';
export const linkUnderlayColor = '#FFF';
export const errorIconColor = '#30d0fe';

export const FormStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: fullWidth,
    backgroundColor: 'rgba(255, 255, 255, 0.40)',
  },
  bgcontainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
  },
  textbox: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.5,
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 13,
    color: 'black',
    height: 50,
    width: 350,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'royalblue',
    height: 50,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    //fontFamily: 'Palatino-Bold',
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  errorTextbox: {
    borderColor: 'red',
    borderWidth: 1,
  },
  labelWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    width: 350,
  },
  labelText: {
    color: 'black',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  labelIcon: {
    color: 'black',
    marginRight: 5,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    //fontFamily: 'Palatino-Bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  error: {
    color: 'red',
    fontWeight: '600',
    fontSize: 12,
  },
  errorIcon: {color: 'white', alignItems: 'center', paddingRight: 5},
  formError: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'firebrick',
  },
  inputError: {
    color: 'firebrick',
  },
  errorMsg: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  formLinks: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    color: 'black',
    fontSize: 12,
    //fontFamily: 'Palatino-BoldItalic',
    textShadowColor: 'white',
    textShadowRadius: 6,
    textTransform: 'uppercase',
  },
});
