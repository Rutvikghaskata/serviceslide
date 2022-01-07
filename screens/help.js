import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image,TextInput} from 'react-native'


const Service = () => {
    return (
          <View style={styles.container}>
          <View style={styles.container1}>
          <TouchableOpacity>
          <Text style={styles.text}>Back</Text>        
          </TouchableOpacity>
          <View style={{ flex:1,justifyContent: 'center',alignItems: 'center',marginTop:-70}}>
          <Text style={styles.text1}>Help</Text>
          </View>       
        </View>
     
        <Image style={{ height:70,width:70}} source={require('../images/help.png')}/>
      
        <Text color='black' style={{marginTop:50}}>Enter Your Mobile:</Text>
        <TextInput placeholder="Mobile"style={{ 
        //    borderBottomWidth:2,
         //    borderColor:'grey',
           marginTop:-5,
           width:250,
           borderRadius:0,
           marginBottom:-10,
           marginLeft:10                               
           }}/>
            <View style={{  height:1, width:300 , backgroundColor:'grey'}}></View>
        <Text color='black' style={{marginTop:50}}>Enter Your Email:</Text>
        <TextInput placeholder="Email"style={{ 
          //    borderBottomWidth:2,
          //    borderColor:'grey',
           marginTop:-5,
           width:250,
           borderRadius:0,
           marginBottom:-10,
           marginLeft:10                               
           }}/>
        <View style={{  height:1, width:300 , backgroundColor:'grey'}}></View>                        
                              
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
      fontSize:20,
      marginTop:10,
      marginLeft:20,
      color:'white',
      fontWeight:'bold',
    },
    text1:{
        fontSize:30, 
        color:'white',
        fontWeight:'bold',      
      },
    
    container: {
       height:'100%',
       width:'100%',
  
    },
    container1: {
        height:'20%',
       width:'100%',
       backgroundColor:'#75C31E'
    },
})

export default Service
