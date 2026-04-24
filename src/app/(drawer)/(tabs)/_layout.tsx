import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarLabelPosition: "beside-icon" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Produtos",
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-bag" size={size} color={color} />
          ),
          tabBarLabel: "Pedido",
        }}
      />
    </Tabs>
  );
}
