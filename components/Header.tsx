import React from "react";
import { Text, View, Image } from "react-native";
import assets from "../constants/assets";
import { COLORS, FONTS, SIZES, styles } from "../constants/theme";
import ImageCmp from "./ImageCmp";
const Header = () => {
  return (
    <View
      style={{
        height: 90,
        width: "100%",
        backgroundColor: COLORS.black,
        padding: SIZES.medium,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <ImageCmp
        height={48}
        width={48}
        radius={25}
        imgUrl={assets.person1}
        mode="cover"
      />

      <Text
        style={{
          color: COLORS.white,
          fontSize: SIZES.large,
          fontFamily: FONTS.semiBold,
          marginLeft: SIZES.extraLarge,
        }}
      >
        Header
      </Text>
    </View>
  );
};

export default Header;
