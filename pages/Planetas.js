import React, { useState, useEffect } from 'react';
import {Button, Text, View, StyleSheet, FlatList} from 'react-native';
import estilo from '../components/estiloRebeldes';

const requestPlanetas = async (callback) => {
    const response = await fetch('https://swapi.dev/api/planets/');
    const parsed = await response.json();
    callback(parsed.results);
  }

export default function Planetas(props){
const [registros, setRegistros] = useState([]);

  useEffect(() => {
    requestPlanetas(setRegistros);
  },[])


  return(
    <View style={styles.container}>
        <Text style={styles.titulo}> Os planetas </Text>
    
      <FlatList
      data={registros}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({item}) => 
      <Text style={estilo.item}>
       <Text> Nome: {item.name}{'\n'}</Text> 
       <Text> Clima: {item.climate}{'\n'}</Text> 
       </Text>
        }/>

    <Button 
    title="Voltar"
    onPress={() => props.navigation.navigate('Imperio')}
    />
    

    </View>
  );
}

const styles =  StyleSheet.create({
container:{
  flex: 1,
  justifyContent:'center',
  alignItems:'center'
},
titulo:{
  fontSize: 25,
  color: '#ff00ab'
  }
})