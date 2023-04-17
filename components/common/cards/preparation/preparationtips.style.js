import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from '../../../../constants';

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

  tipContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: SIZES.xLarge,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.white,
    padding: 20,
  },

  tipText: {
    fontFamily: FONT.regular,
    fontSize: 30,
    color: COLORS.tertiary,
  },

  tipBtnBox: {
    flexDirection: "row",
    position: 'absolute',
    bottom: 20,
    width: "100%",
    justifyContent: "space-between",
    padding: 40,
  },

  tipBtn: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 10,
    
  },
  
  tipBtnText: {
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },

  enumerate: {
    marginBottom: 20,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.tertiary
  },
});

export default styles;
