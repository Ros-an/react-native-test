import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { userInfo } from "../assets/dummy";
import ChatRow from "../components/ChatRow";
import Header from "../components/Header";
import { COLORS, SIZES } from "../constants/theme";
const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
        <Header />
        <View
          style={{
            backgroundColor: COLORS.white,
            minHeight: "calc(100% - 90px)",
            borderTopLeftRadius: SIZES.extraLarge,
            borderTopRightRadius: SIZES.extraLarge,
            padding: SIZES.medium,
          }}
        >
          {userInfo.map((item) => (
            <ChatRow key={item.id} {...item} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
