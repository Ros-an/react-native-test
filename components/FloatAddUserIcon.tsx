import React from "react";
import { TouchableOpacity, Image } from "react-native";
import assets from "../constants/assets";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
const FloatAddUserIcon = () => {
  let navigation: NavigationProp<ParamListBase> = useNavigation();
  const handlePress = () => {
    navigation.navigate("AddUser", {});
  };
  return (
    <TouchableOpacity
      style={{
        width: 70,
        height: 70,
        backgroundColor: "rgb(70, 48, 235)",
        position: "absolute",
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5,
        bottom: 100,
        right: 15,
        ...SHADOWS.dark,
      }}
      onPress={handlePress}
    >
      <AntDesign name="adduser" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default FloatAddUserIcon;
