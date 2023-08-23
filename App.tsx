import { FlatList, StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { CreatedTask } from './src/components/CreatedTask';
import { Tasks } from './src/components/Tasks';
import { TaskContext, TaskContextProvider } from './src/contexts/TaskContext';
import { useContext } from 'react';
import { EmptyComponent } from './src/components/EmptyComponent';


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

