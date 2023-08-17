import { Text, View } from "react-native";
import { style } from "./style";
import { NewTask } from "../NewTask";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";

export function CreatedTask (){
    const [ countTask, setCountTask] = useState(0)
    const { tasks, countCompleted } = useContext(TaskContext)

    useEffect(() => {
        setCountTask(tasks.length)
    }, [tasks])


    return (
        <View style={style.container}>
            <NewTask/>
            <View style={style.textContainer}>
                <View style={style.textCreate}>
                    <Text style={style.text}>Criadas</Text>
                    <View style={style.countDown}>
                        <Text style={style.textCountDown}>{countTask}</Text>
                    </View>
                </View>
                <View style={style.textCreate}>
                    <Text style={style.text}>Concluídas</Text>
                    <View style={style.countDown}>
                        <Text style={style.textCountDown}>{countCompleted}</Text>
                    </View>
                </View>
            </View>
           
        </View>
    )
}