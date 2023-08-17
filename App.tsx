import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { CreatedTask } from './src/components/CreatedTask';
import { Tasks } from './src/components/Tasks';
import { TaskContextProvider } from './src/contexts/TaskContext';


export default function App() {
  const global =StyleSheet.create({
    global:{
      backgroundColor:'#1A1A1A',
      height:'100%',
    }
  })
  return (
        <View style={global.global}>
          <TaskContextProvider>
            
            <Header></Header>
            <CreatedTask/>
            <Tasks/>

          </TaskContextProvider>
      
        <StatusBar 
          backgroundColor='transparent'
          barStyle='light-content'
          translucent/>
      </View>

  );
  
}

