import { StyleSheet } from "react-native";
export const COLORS = {
    primary: "#1E1E1E",
    secondary: "#4D626C",
    white: "#FFF",
    yellow: "#E7E049",
    black: "#000"
  };
  
  export const SIZES = {
    base: 10,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
  };
  
  export const FONTS = {
    semiBold: "PoppinSemiBold",
    medium: "PoppinMedium",
    regular: "PoppinRegular",
    light: "PoppinLight",
  };
  
  export const SHADOWS = {
    light: {
      shadowColor: COLORS.secondary,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
  
      elevation: 3,
    },
    medium: {
      shadowColor: COLORS.secondary,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
    },
    dark: {
      shadowColor: COLORS.secondary,
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
  
      elevation: 14,
    },
  };
  
export  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
    border: {
        borderWidth: 1,
        borderColor: "orange",
       borderStyle: "solid"
    }
  });