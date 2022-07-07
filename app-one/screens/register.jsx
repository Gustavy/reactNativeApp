import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Typo } from "../components/typo";
import { Layout } from "../layout";

export function RegisterScreen({navigation}){
    return (
        <Layout>
            <View style={{
                marginTop: 106,
                paddingBottom: 24,
                flexGrow: 1,
                justifyContent: "space-between"
            }}>
                <View>
                <Typo weight="bold" size={24}>Create account</Typo>
                <Typo  size={14} color="#ACB1C1" marginTop={8}>Fill in the details to get started</Typo>

                <View style={{
                    marginTop: 32
                }}>
                    <Input placeholder="Enter your names" label="Names"/>
                    <Input placeholder="Enter your email" label="Email"/>
                    <Input placeholder="Enter your password" label="Password"/>
                </View>

                <Button  onPress={
                    () => {
                        navigation.navigate("Home")
                    }
                }>Sign Up</Button>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        textAlign: "center"
                    }}>Already have an account ?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Login")
                    }}>
                    <Text style={{
                        textAlign: "center",
                        color: "#BB23F0"
                    }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Layout>
    )
}