import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor:'#1A1A1A',
        borderBottomWidth:1,
        borderBottomColor:'#333'
    },
    textContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginTop:32,
        marginBottom:20,

    },
    textCreate:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1A1A1A",
        fontSize:16,
        fontWeight: '700',
        marginLeft:40,
        marginRight:30,
        gap:10,

       
    },
    text:{
        color:'#4EA8DE'
    },
    countDown:{
        backgroundColor:'#333',
        borderRadius:999,
        padding:2,
        paddingLeft:8,
        paddingRight:8,
    },
    textCountDown:{
        color:'#FFFFFF',
        fontSize:12,
        fontWeight:"600",
    },

})