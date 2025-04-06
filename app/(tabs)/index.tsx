import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className={"flex-1 justify-center items-center"}>
      <Text className={"text-2xl font-bold  text-dark-200"}>Welcome!</Text>
        <Link href={'/onboarding'}>onboarding</Link>
        <Link href={'/movie/1'}>movie</Link>
    </View>
  );
}
