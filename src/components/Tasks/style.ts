import { StyleSheet} from 'react-native'
export const style = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        width:'100%',
        padding:24,
    },
    card:{
        paddingLeft:8,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 8,
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#262626',
        borderRadius:8,
        color:'#F2F2F2',
        marginTop:10,
    },
    contentTask:{
        flexDirection:'row',
        alignItems: 'center',
        gap: 10,


    },
    buttonRemove:{
        width:30,
        backgroundColor:'transparent',
        
    },
    textCard:{
        color:'#F2F2F2',
        fontSize:14,
        fontWeight:'400',
    },
    textCardSelected:{
        color:'#808080',
        textDecorationLine:'line-through'

    },
   
})