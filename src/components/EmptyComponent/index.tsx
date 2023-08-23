import { View, Text, Image } from "react-native";
import { style } from "./style";
import task from '../../assets/task.png'


export function EmptyComponent (){
    return (
        <View style={style.emptyComponent}>
            <Image source={task}></Image>
            <Text style={style.textEmpty}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={style.textTaskEmpty}>Crie tarefas e organize seus itens a fazer</Text>

        </View>
    )
}