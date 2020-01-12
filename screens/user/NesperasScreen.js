
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Button } from "react-native-paper";
import CustomListItem from "../../components/CustomListItem";
import {NESPERA_API_URL} from 'react-native-dotenv';



const NesperasScreen = (props) => {

  const [nespera, setNespera] = useState(null);
  const [top, setTop] = useState(null);

  const handleRandom = () => {
    let randomId = Math.floor(Math.random()*(nespera.length-1))+1;
    console.log(randomId+1);
    props.navigation.navigate("Single", { nesperaToShow: nespera[randomId] })
  }


  useEffect(() => {
    // Create an scoped async function in the hook
    function getNesperas() {
      fetch(NESPERA_API_URL+"/Nesperas")
        .then(function (response) {
         
          return response.json();
        })
        .then(function (json) {
          setNespera(json);
          const top5Nesperas = json.slice(0,5);
          
          setTop(top5Nesperas);

        });
    };
    getNesperas();

    // Execute the created function directly

  }, []);

  return (
    <View style={styles.container}> 

       <FlatList data={top} keyExtractor = { (item) => item["id"].toString() } renderItem={(itemData) =>
          <CustomListItem nesperaData={itemData.item}
            goToSingle={
              (nesperaData) => props.navigation.navigate("Single", { nesperaToShow: nesperaData, title:nesperaData.title })} />} />
      
      <Button onPress={()=>handleRandom()} mode="contained" loading={true}>UMA AO CALHAS</Button>


 




    </View>
  );
};
const styles = StyleSheet.create({

  container: { 
    flex:1,
 justifyContent:"center",
    paddingHorizontal: 30 }
})



export default NesperasScreen

