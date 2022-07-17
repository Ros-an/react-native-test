import React from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  Alert,
  TouchableOpacity,
} from "react-native";
import assets from "../constants/assets";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import ImageCmp from "./ImageCmp";
export interface ChatRowProps {
  id: number;
  name: string;
  recentMsg: string;
  notification: number;
  timeStamp: string;
  imgUrl: ImageSourcePropType;
}
const ChatRow = ({ ...props }: ChatRowProps) => {
  const { alert } = Alert;
  const createTwoButtonAlert = () =>
    alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  const handlePress = () => {
    console.log(`${props.name}`, props);
    createTwoButtonAlert();
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
      }}
    >
      <ImageCmp
        height={60}
        width={60}
        radius={50}
        imgUrl={props.imgUrl}
        mode="cover"
      />
      <View style={{ flex: 0.85 }}>
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.font,
            color: COLORS.secondary,
          }}
        >
          {props.recentMsg}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "flex-end",
          height: "90%",
          paddingRight: SIZES.font,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.light,
            fontSize: SIZES.base,
          }}
        >
          {props.timeStamp}
        </Text>
        <View
          style={{
            width: props.notification === 1 ? 8 : 18,
            height: props.notification === 1 ? 8 : 18,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            backgroundColor:
              props.notification === 1 ? COLORS.yellow : COLORS.primary,
          }}
        >
          {props.notification > 1 ? (
            <Text
              style={{
                color: COLORS.white,
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
              }}
            >
              {props.notification}
            </Text>
          ) : (
            <></>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;
