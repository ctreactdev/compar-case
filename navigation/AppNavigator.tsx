import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Products } from "../frontend/screens";
import { TabIcon } from "../frontend/components";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarLabelStyle: {
          display: "none",
        },
        tabBarOptions: {},
        headerShown: false,
        tabBarStyle: {
          borderTopColor: "transparent",
          backgroundColor: "#F7F5F3",
          height: 85,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <TabIcon
              source={require("../frontend/assets/icons/Home.png")}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: () => (
            <TabIcon
              source={require("../frontend/assets/icons/Search.png")}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Home}
        options={{
          tabBarIcon: () => (
            <TabIcon
              source={require("../frontend/assets/icons/Cart.png")}
              size={45}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={Home}
        options={{
          tabBarIcon: () => (
            <TabIcon
              source={require("../frontend/assets/icons/Likes.png")}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: () => (
            <TabIcon
              source={require("../frontend/assets/icons/Profile.png")}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
