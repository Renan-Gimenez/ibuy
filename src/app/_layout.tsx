import { FocusedStatusBar } from "@/components/FocusedStatusBar";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <FocusedStatusBar style="light" animated />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
