import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from '../constants';

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    width: 125,
    height: 75,
    padding: 10,
    borderRadius: SIZES.small / 1.25,
  },

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
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.white,
  },

  subtitle: {
    flex: 1,
    width: "100%",
    color: COLORS.primary,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium
  },

  header: {
    marginTop: SIZES.xLarge,
    gap: SIZES.small,
    justifyContent: "space-between",
    flexDirection: 'column'
  }
});

export default styles;
