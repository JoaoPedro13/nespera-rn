
      
      import React, { useEffect, useState,useContext } from 'react'
      import { View, Text, FlatList, StyleSheet } from 'react-native'
      import { Button, List } from "react-native-paper";
      import CustomListItem from "../../components/CustomListItem";
      import { store } from '../../store/store';
      import {NESPERA_API_URL} from 'react-native-dotenv';

      
      
      
      const NesperasScreen = (props) => {
        const globalStore = useContext(store);
        // const user = globalStore.state.user;
        const user = "qUiqL4TaarbPqU1rXLCg6pcKvLm2";
        console.log("asd",user);

        const [nespera, setNespera] = useState([]);
        function getUserNesperas() {
          fetch(NESPERA_API_URL+"/Nesperas?authorId="+user)
            .then(function (response) {
              return response.json();
            })
            .then(function (json) {
              console.log(json);
              setNespera(json)
            });
        };
      
        useEffect(() => {
          // Create an scoped async function in the hook
          
      
          getUserNesperas();
      
      
      
        }, [getUserNesperas]);
        
      
      
        return (
          <View style={styles.container}>
                  <Button onPress={()=>props.navigation.navigate("CreateNew")}>Criar Nova</Button>

      
           
            <FlatList data={nespera} keyExtractor={(el) => el["_id"]}
              renderItem={(itemData) =>
                <CustomListItem nesperaData={itemData.item}
                  goToSingle={
                    (nesperaData) => props.navigation.navigate("Single", { nesperaToShow: nesperaData,title:nesperaData.title })} />} />
      
      
      
      
      
      
          </View>
        )
      }
      const styles = StyleSheet.create({
        container: { paddingHorizontal: 30 }
      })
      
      
      export default NesperasScreen
      
      
      
      
  