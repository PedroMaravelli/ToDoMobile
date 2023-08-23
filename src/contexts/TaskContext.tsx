import { ReactNode,  createContext, useState } from "react";


interface TaskContextProps{
    tasks: string[]
    countCompleted: number
    addNewTask: (task: string) => void
    handleRemoveTask: (task: string) => void
    countTaskCompleted: (number: number) => void
}
export const TaskContext = createContext({} as TaskContextProps)


interface ProviderProps{
    children: ReactNode
}

export function TaskContextProvider({children}: ProviderProps ){
    const [tasks, setTasks] = useState<string[]>([])
    const [countCompleted, setCountCompleted] = useState<number>(0)
    

    function addNewTask(task: string){
      setTasks((state) => [task , ...state])

    }
    function handleRemoveTask(task: string){
        setTasks(tasks.filter(taskRemove => taskRemove !== task ))
    }
    function countTaskCompleted(number: number){
        setCountCompleted(number)
    }
    return (
        <TaskContext.Provider value={{
            tasks,
            countCompleted,
            addNewTask,
            countTaskCompleted,
            handleRemoveTask,
            
        }}>
            {children}
        </TaskContext.Provider>
    )
}