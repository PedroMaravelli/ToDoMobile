import { ReactNode, createContext, useState } from "react";


interface TaskContextProps{
    tasks: string[]
    buttonSelected: boolean
    countCompleted: number
    addNewTask: (task: string) => void
    handleRemoveTask: (task: string) => void
    handleSelectTask: () => void
}
export const TaskContext = createContext({} as TaskContextProps)

interface ProviderProps{
    children: ReactNode
}

export function TaskContextProvider({children}: ProviderProps ){
    const [tasks, setTasks] = useState<string[]>([])
    const [buttonSelected, setButtonSelected] = useState<boolean>(false);
    const [countCompleted, setCountCompleted] = useState<number>(0)


    function addNewTask(task: string){
        setTasks([...tasks, task])
    }
    function handleRemoveTask(task: string){
        setTasks(tasks.filter(taskRemove => taskRemove !== task ))
    }
    function handleSelectTask(){
        if(buttonSelected){
            setButtonSelected(false);
            setCountCompleted(prevState => prevState - 1)
        }
        else{
            setButtonSelected(true)
            setCountCompleted(prevState => prevState + 1)
            

        }
    }
    return (
        <TaskContext.Provider value={{
            tasks,
            buttonSelected,
            countCompleted,
            addNewTask,
            handleRemoveTask,
            handleSelectTask,

        }}>
            {children}
        </TaskContext.Provider>
    )
}