import { TouchableOpacity, View } from "react-native";
import { Typo } from "../components/typo";
import { Layout } from "../layout";

function Item({navigation}){
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("NewItem")
        }}>
            <View style={{
            backgroundColor: "white",
            marginTop: 24,
            paddingTop: 21,
            paddingBottom: 26,
            paddingLeft: 24,
            borderRadius: 8
        }}>
            <Typo weight="bold">Macbook Pro</Typo>
            <Typo color="#BB23F0" marginTop={8}>$ 2999</Typo>
        </View>
        </TouchableOpacity>
    )
}

export function HomeScreen({navigation}){
    const items = [1,2,3];

    return (
        <Layout bg="#F9F9F9">
            <View style={{
                paddingTop: 43,
                flex: 1
            }}>
                <Typo size={18} weight="bold">Your Items</Typo>
                {
                    items.map((item, i) => (
                        <Item key={i} navigation={navigation}/>
                    ))
                }
            </View>
        </Layout>
    )
}