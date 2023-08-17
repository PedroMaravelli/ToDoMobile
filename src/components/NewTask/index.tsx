import { TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import add from '../../assets/add.png'
import { style } from "./style";
import { useState , useContext} from "react";
import { TaskContext } from "../../contexts/TaskContext";

export function NewTask (){
    const [task,setTask] = useState('')

    const {addNewTask} = useContext(TaskContext)

    function handleNewTask (){
        addNewTask(task)
        setTask('')
    }
    return (
        <View style={style.newTask}>
            <TextInput 
                placeholder="Adicione uma nova tarefa"
                style={style.textInput} 
                placeholderTextColor='#808080'
                onChangeText={setTask}
                value={task}/>
            <TouchableOpacity onPress={handleNewTask} style={style.buttonAdd}>
                <Image source={add}></Image>
            </TouchableOpacity>
        </View>
    )
}