import { StatusBar, View } from "react-native";

export function Layout({children, bg="white"}){
    return (
        <View style={{
            paddingHorizontal: 24,
            marginTop: StatusBar.currentHeight,
            flex: 1,
            backgroundColor: bg
        }}>
            {children}
        </View>
    )
}