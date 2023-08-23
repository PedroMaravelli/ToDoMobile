import { Button, Text, View,Image, TouchableOpacity, FlatList, ListRenderItemInfo } from "react-native";
import remove from '../../assets/remove.png'
import selected from '../../assets/selected.png'
import unselected from '../../assets/unselected.png'



import { style } from "./style";
import { useState, useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { EmptyComponent } from "../EmptyComponent";



export function Tasks(content: any){
    

    const {tasks, handleRemoveTask, countTaskCompleted, countCompleted} = useContext(TaskContext)
    const [buttonSelected, setButtonSelected] = useState<boolean>(false);

    function handleSelectTask(){
        if(buttonSelected){
            setButtonSelected(false);
            countTaskCompleted(countCompleted -1)
        }
        else{
            setButtonSelected(true)
            countTaskCompleted(countCompleted + 1)
            

        }
    }
    


    return (
        <View style={style.container}>
              <FlatList
              data={tasks}
              keyExtractor={item => item}
              renderItem={(({item}) => {
                return(
                    <View style={style.card}>
                        <View style={style.contentTask}>
                            <TouchableOpacity onPress={handleSelectTask}>
                                <Image source={buttonSelected ? selected : unselected}></Image>
                                            
                            </TouchableOpacity>
                                <Text style={buttonSelected ? style.textCardSelected : style.textCard }>{item}</Text>
                        </View>
                            <TouchableOpacity style={style.buttonRemove} onPress={() => handleRemoveTask(item)}>
                                    <Image source={remove}></Image>
                            </TouchableOpacity>
                    </View>
                

                )
              })}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => {
                    return(
                        <EmptyComponent/>
                    )
                }}
                />


        </View>
    )
}