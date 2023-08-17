import { StyleSheet} from 'react-native'
export const style = StyleSheet.create({
    newTask:{
        marginTop: -30,
        alignItems: 'center',
        gap:10,
        flexDirection: 'row',
        justifyContent:'center'
    },
    textInput:{
        backgroundColor:'#262626',
        width:280,
        height:54,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        fontSize: 16,
        color: '#FFFFFF',
    },
    buttonAdd:{
        backgroundColor:'#1E6F9F',
        width: 52,
        height: 52,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})