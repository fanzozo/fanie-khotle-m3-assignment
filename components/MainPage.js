import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,View } from "react-native";
import * as Speech from 'expo-speech';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Depressed",
    verse: "READ Psalm 34",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Anxious",
    verse: "READ Psalm 46",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Discouraged",
    verse: "READ Psalm 23",
  },
];


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#92823e" : "#c3ac7a";
    const color = item.id === selectedId ? 'white' : 'black';


    return (
     
      <Item 
        item={item}
        onPress={() => alert(item.verse)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
      
    );
};

  return (
    <SafeAreaView style={styles.container}>
    <Text>Where to find Help when</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.verse}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  title: {
    fontSize: 32,
  },
  
});

export default App;