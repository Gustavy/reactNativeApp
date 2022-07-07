import { View, TouchableOpacity, Text } from "react-native";

export function Button(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View
        style={{
          backgroundColor: "#BB23F0",
          paddingVertical: 16,
          borderRadius: 32,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 14,
            fontWeight: "700",
          }}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
