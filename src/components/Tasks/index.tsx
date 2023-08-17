import { Button, Text, View,Image, TouchableOpacity, FlatList } from "react-native";
import remove from '../../assets/remove.png'
import selected from '../../assets/selected.png'
import unselected from '../../assets/unselected.png'
import task from '../../assets/task.png'


import { style } from "./style";
import { useState, useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

export function Tasks(){
    

    const {tasks, handleRemoveTask, buttonSelected, handleSelectTask} = useContext(TaskContext)

    
    


    return (
        <View style={style.container}>
            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({item}) =>{
                    return(
                        <View style={style.card}>
                            <View style={style.contentTask}>
                                <TouchableOpacity onPress={handleSelectTask}>
                                    <Image source={buttonSelected ? selected : unselected}></Image>
                                    
                                </TouchableOpacity>
                                <Text style={buttonSelected ? style.textCardSelected : style.textCard }>{item}</Text>
                            </View>
                        <TouchableOpacity onPress={() => handleRemoveTask(item)}>
                            <Image source={remove}></Image>
                        </TouchableOpacity>
                    </View>
                    
                    )
                }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => {
                    return(
                        <View style={style.emptyComponent}>
                            <Image source={task}></Image>
                            <Text style={style.textEmpty}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={style.textTaskEmpty}>Crie tarefas e organize seus itens a fazer</Text>

                        </View>
                    )
                }}
            />
           
            
        </View>
    )
}