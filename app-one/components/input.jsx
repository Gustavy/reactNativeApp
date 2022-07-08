import { Text, TextInput, View } from "react-native";

export function Input({value,onChangeText, onBlur, security=false, placeholder, label}) {
    return (
        <View>
            <Text style={{
                fontSize: 14,
                fontWeight: "700"
            }}>{label}</Text>
            <TextInput
            onChangeText={onChangeText}
            onBlue={onBlur}
            value={value}
            secureTextEntry = {security}
            style={{
                borderWidth: 1,
                borderColor: "#D7D6DD",
                paddingVertical: 10,
                paddingHorizontal: 16,
                marginTop: 8,
                marginBottom: 16,
                borderRadius: 8
            }} placeholder={placeholder}
            />
        </View>
    )
}