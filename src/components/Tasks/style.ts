import { StyleSheet} from 'react-native'
export const style = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        width:'100%',
        padding:24,
    },
    card:{
        padding:12,
        paddingTop: 20,
        paddingBottom: 20,
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
    textCard:{
        color:'#F2F2F2',
        fontSize:14,
        fontWeight:'400',
    },
    textCardSelected:{
        color:'#808080',
        textDecorationLine:'line-through'

    },
    emptyComponent:{
        alignItems: 'center',
    },
    textEmpty:{
        color: '#808080',
        fontWeight: '700',
        marginTop: 16,
    },
    textTaskEmpty:{
        color: '#808080',


    }
})