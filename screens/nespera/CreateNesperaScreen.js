import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { store } from '../../store/store';

const CreateNesperaScreen = (props) => {
  const [title, setTitle] = useState("");
  const [opA, setOpA] = useState("");
  const [opB, setOpB] = useState("");


  const globalState = useContext(store);
  const user = globalState.state.user;
  console.log(user);

  const handleCreate = async () => {
    const response = await fetch("https://ironhack-wouldyourather.herokuapp.com/api/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ optionA: opA, optionB: opB, category: "dollar", title: title, authorID: user })
    });
    const resData = await response.json();
    console.log(resData);


    props.navigation.pop();
  }



  return (
    <View style={styles.container}>
      <TextInput placeholder="Título do Dilema" onChangeText={(text) => setTitle(text)} />
      <Text>Preferias</Text>
      <TextInput placeholder="Ser o Nuno Markl." onChangeText={(text) => setOpA(text)} />
      <Text>ou</Text>
      <TextInput key="asd" placeholder="Ser Anão" onChangeText={(text) => setOpB(text)} />
      <Button onPress={() => handleCreate()}>Criar</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30
  }
})

export default CreateNesperaScreen;
