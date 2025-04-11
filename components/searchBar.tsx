import {Image, TextInput, View} from "react-native";
import {icons} from "@/constants/icons";

interface SearchBarProps {
    onPress?: () => void;
    placeholder: string;
}

export default function SearchBar({onPress, placeholder}: SearchBarProps) {
    return (
        <View className={"flex-row items-center bg-dark-200 rounded-full px-5 py-4"}>
            <Image source={icons.search} className={"size-5"} resizeMode={"contain"} tintColor={"#ab8bff"}/>
            <TextInput className={"flex-1 ml-2 text-white"}
                       onPress={onPress}
                       placeholder={placeholder}
                       value={""}
                       onChangeText={(text) => {
                       }}
                       placeholderTextColor={"#a8b5db"}
            />
        </View>
    );
}
