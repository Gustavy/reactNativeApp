import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Typo } from "../components/typo";
import { Layout } from "../layout";

export function LoginScreen({navigation}){
    return (
        <Layout>
            <View style={{
                marginTop: 106,
                paddingBottom: 24,
                flexGrow: 1,
                justifyContent: "space-between"
            }}>
                <View>
                <Typo weight="bold" size={24}>Welcome back,</Typo>
                <Typo  size={14} color="#ACB1C1" marginTop={8}>Login to continue</Typo>

                <View style={{
                    marginTop: 32
                }}>
                    <Input placeholder="Enter your email" label="Email"/>
                    <Input placeholder="Enter your password" label="Password"/>
                </View>

                <Button onPress={
                    () => {
                        navigation.navigate("Home")
                    }
                }>Login</Button>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        textAlign: "center"
                    }}>Don't have an account ?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Register")
                    }}>
                    <Text style={{
                        textAlign: "center",
                        color: "#BB23F0"
                    }}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Layout>
    )
}