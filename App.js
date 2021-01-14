import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker} from 'react-native';
import { TextInput, Card, RadioButton } from 'react-native-paper'

export default function App() {


  const [name, setname] = useState('');
  const [lastname, setlastname] = useState('');
  const [discription, setdiscription] = useState('');
  const [selectedValue, setSelectedValue] = useState("");
  const [checked, setChecked] = useState('first')

  return (
    
    <View  style={styles.container}>
      <Text style={styles.text}>form</Text>

      <Card style={{ margin: 10, backgroundColor: "#15856107" }}>

        <Card.Content >
          <TextInput style={{ marginBottom: 5 }}
            label="name"
            type=""
            value={name}
            onChangeText={name => setname(name)}
          />
        </Card.Content>
        <Card.Content >
          <TextInput style={{ marginBottom: 5 }}
            label="lastname"
            type=""
            value={lastname}
            onChangeText={lastname => setlastname(lastname)}
          />
          <View  >
            <Picker style={{backgroundColor:"blue"}}
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="karachi" value="khi" />
              <Picker.Item label="islamabad" value="isl" />
              <Picker.Item label="lahore" value="lh" />
            </Picker>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
            <Text style={styles.text}>male</Text>
            <RadioButton

              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={styles.text}>female</Text>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>
          <TextInput style={{ marginBottom: 5, height: 100 }}
            label="discription"
            multiline={true}
            value={discription}
            onChangeText={discription => setdiscription(discription)}
          />
          <TouchableOpacity style={{ borderWidth: 2, marginTop: 10, borderColor: "green", backgroundColor: "#11585859", borderRadius: 20, padding: 5 }}>
            <Text style={styles.text}>
              submit</Text>
          </TouchableOpacity>

        </Card.Content>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 30,
    textAlign: "center"
  }
});
