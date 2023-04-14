import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from '../../../constants';

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

  cardsContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: SIZES.xLarge,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.white,
  },

  card: (completed) => ({
    backgroundColor: completed ? COLORS.lightTetriary : COLORS.white,
    padding: 20,
    height: 175,
    marginTop: SIZES.medium,
    gap: SIZES.small,
  }),

  enumerate: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    margin: 0,
    top: -5,
    left: -5,
    backgroundColor: COLORS.secondary,
    color: COLORS.primary,
    borderRadius: 100,
    width: 30,
    height: 30,
    textAlign: "center",
    paddingTop: 4,
  },

  cardBtn: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    alignSelf: "flex-end",
    marginVertical: 0,
    backgroundColor: COLORS.primary,
    padding: 5,
    bottom: 15,
    right: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    position: "absolute"
  }
});

export default styles;
