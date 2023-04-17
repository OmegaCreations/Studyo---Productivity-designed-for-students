import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from '../../constants';

const styles = StyleSheet.create({

  titleSecondary: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginHorizontal: 20,
    marginTop: 20,
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

  
  
});

export default styles;
