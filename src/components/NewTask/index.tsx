import { TextInput, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import add from '../../assets/add.png'
import { style } from "./style";
import { useState , useContext} from "react";
import { TaskContext } from "../../contexts/TaskContext";

export function NewTask (){
    const [content,setContent] = useState<string>('')


    const {addNewTask, tasks} = useContext(TaskContext)


    function handleNewTask (){
        if(content == ''){
            Alert.alert('Digite uma task!!')
        }if(tasks.includes(content)){
            Alert.alert('Essa task já existe!!')

        }
        else{
            addNewTask(content)
            setContent('')

        }

       
    }
    return (
        <View style={style.newTask}>
            <TextInput 
                placeholder="Adicione uma nova tarefa"
                style={style.textInput} 
                placeholderTextColor='#808080'
                onChangeText={setContent}
                value={content}/>
            <TouchableOpacity onPress={handleNewTask} style={style.buttonAdd}>
                <Image source={add}></Image>
            </TouchableOpacity>
        </View>
    )
}