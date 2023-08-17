import { Image, View } from "react-native";
import logo from "../../assets/logo.png"
import { style } from "./style";



export function Header(){
    return (
        <View style={style.header}>
            <Image source={logo}/>
        </View>
    )
}