import { StyleSheet, Dimensions } from "react-native";

import { COLORS, SIZES, FONT } from '../../constants';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

  titleSecondary: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  titleTertiary: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.tertiary,
  },
  logoImg: {
    width: 125,
    height: 75,
    padding: 10,
    borderRadius: SIZES.small / 1.25,
  },

  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
    marginTop: SIZES.xLarge,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.white,
    padding: SIZES.large
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressText: {
    fontSize: 60,
    fontFamily: FONT.medium,
    color: COLORS.tertiary,
    width: 200,
    marginBottom: 140,
    textAlign: 'center',
  },
  
  button: {
    position: 'absolute',
    bottom: 120,
    width: width * 0.7,
    height: 60,
    backgroundColor: COLORS.tertiary,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 25,
    color: 'white',
    letterSpacing: 2.0,
  },

  
  
});

export default styles;
