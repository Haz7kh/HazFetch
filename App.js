
import React ,{useEffect,useState}from 'react';
import { StyleSheet, Text, View,SafeAreaView,FlatList,ActivityIndicator } from 'react-native';
const Filmer="https://reactnative.dev/movies.json";
const App= ()=> {
  const [isLoading,setIsloading]= useState(true);
  const [data,setData]= useState([])
  const [title,setTitle]= useState([])
  const [description,setDescription]= useState([])
  
  

  useEffect(()=>{
    fetch("https://reactnative.dev/movies.json")
    .then((response) => response.json())
    .then((json) => {
      
      setIsloading(false);
     setData(json.movies);
     setTitle(json.title);
     setDescription(json.description);
     
     
     
    })
    .catch((error)=> alert(error))
    
    
  },[]);
  
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator
      
      size='large'
      
      
      /> : (
        
        <View style={styles.ViewS}>
          <Text style={styles.textS}>{title}</Text>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={{margin:5}}>{item.id} ,{item.title},  {item.releaseYear}</Text>
          )}
        />
         <Text style={{fontWeight:"bold"}}>{description}</Text>
        </View>
        
      )}
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdd',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  ViewS:{
    width:300,
    height:300,
    borderWidth:3,
    padding:10,
    backgroundColor:"#FFDBAC",
    borderRadius:25,
  },
  textS:{
    borderWidth:2,
    padding:10,
    fontWeight:"bold"
  },
 
    
  
});
export default App;