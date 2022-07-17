import React from "react";
import { ImageResizeMode, ImageSourcePropType } from "react-native";
import { Image } from "react-native";

export interface ImageCmpProps {
  imgUrl: ImageSourcePropType;
  mode: ImageResizeMode;
  width: number | string;
  height: number | string;
  radius: number;
}
const ImageCmp = ({ imgUrl, mode, radius, ...props }: ImageCmpProps) => {
  return (
    <Image
      source={imgUrl}
      resizeMode={mode}
      style={{
        borderRadius: radius,
        ...props,
      }}
    />
  );
};

export default ImageCmp;
