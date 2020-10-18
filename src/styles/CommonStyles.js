import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const fullWidth = Dimensions.get('window').width; //full width
const fullHeight = Dimensions.get('window').height; //full width

export const deepSquidInk = '#152939';
export const linkUnderlayColor = '#FFF';
export const errorIconColor = '#30d0fe';

export const CommonStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    color: 'blue',
    fontSize: 15,
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: fullWidth,
    height: fullHeight,
  },
});
