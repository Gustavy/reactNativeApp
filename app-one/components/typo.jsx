import { Text } from "react-native";

export function Typo({size = 14, children, color = "black", weight="600", marginTop = 0}){
    return (
        <Text style={{
            fontSize: size,
            color: color,
            fontWeight: weight,
            marginTop: marginTop
        }}>{children}</Text>
    )
}