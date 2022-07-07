import { Text, TextInput, View } from "react-native";

export function Input(props){
    return (
        <View>
            <Text style={{
                fontSize: 14,
                fontWeight: "700"
            }}>{props.label}</Text>
            <TextInput
            secureTextEntry = {true}
            style={{
                borderWidth: 1,
                borderColor: "#D7D6DD",
                paddingVertical: 10,
                paddingHorizontal: 16,
                marginTop: 8,
                marginBottom: 16,
                borderRadius: 8
            }} placeholder={props.placeholder}/>
        </View>
    )
}