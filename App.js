import { useState } from 'react'
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  Alert,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem'
import { AddTodo } from './components/addTodo';
import { SandBox } from './components/sandbox';

export default function App() {
  const [names, setNames] = useState([
    { name: 'Mujtaba', id: '1' },
    { name: 'Ibrahim', id: '2' },
    { name: 'Haruna', id: '3' },

  ]);

  const pressHandler = (id) => {
    console.log(id)
    setNames((prevNames) => {
      return prevNames.filter(person => person.id != id)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setNames((prev) => {
        return [
          { name: text, id: Math.random().toString() },
          ...prev
        ]
      })
    } else {
      Alert.alert('OPPS!', 'Todo must be over 3 char long', [
        { text: 'understood', onPress: () => console.log('Alert Closed') }
      ]);
    }

  }



  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={names}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>

        </View>

      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  content:{
    padding:40,
    flex:1,
  },
  list:{
    marginTop:20,
    flex: 1,
  }
});
