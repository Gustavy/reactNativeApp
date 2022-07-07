import { View, Text } from "react-native";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Typo } from "../components/typo";
import { Layout } from "../layout";

export function NewItemScreen({navigation}){
    //handle submit
    return (
        <Layout>
            <View style={{
                paddingTop: 42
            }}>
                <Typo size={18} weight="bold">Enter new item's details</Typo>
                <View style={{
                    marginTop: 32
                }}>
                    <Input label="Item name" placeholder="Ente the item's name" />
                    <View style={{
                        maxWidth: 140
                    }}>
                    <Input label="Price" placeholder="Price" />
                    </View>
                    <Button onPress = {() => navigation.navigate("Home")}>Save Item</Button>
                </View>
            </View>
        </Layout>
    )
}