import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Search from "../screens/Search";
import { COLORS } from "../constants/theme";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import AddUser from "../screens/AddUser";
import FloatAddUserIcon from "./FloatAddUserIcon";
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.primary,
          height: 75,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth: 2,
                paddingBottom: 4,
                borderBottomColor: focused ? COLORS.yellow : "transparent",
              }}
            >
              <Text>
                <Feather name="home" size={24} color={COLORS.white} />{" "}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth: 2,
                paddingBottom: 4,
                borderBottomColor: focused ? COLORS.yellow : "transparent",
              }}
            >
              <Text>
                <MaterialCommunityIcons
                  name="tune-vertical"
                  size={24}
                  color={COLORS.white}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth: 2,
                paddingBottom: 4,
                borderBottomColor: focused ? COLORS.yellow : "transparent",
              }}
            >
              <Text>
                <AntDesign name="search1" size={24} color={COLORS.white} />
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddUser"
        component={AddUser}
        options={{
          tabBarButton: () => <FloatAddUserIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
