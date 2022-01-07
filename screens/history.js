import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'


const Service = () => {
    return (
        <View style={styles.container}>
          <View style={styles.container1}>
          <TouchableOpacity>
          <Text style={styles.text}>Back</Text>        
          </TouchableOpacity>
          <View style={{ flex:1,justifyContent: 'center',alignItems: 'center',marginTop:-70}}>
          <Text style={styles.text1}>My History</Text>
          </View>
          
          </View>
          <View style={styles.container2}>
              </View>
          <TouchableOpacity style={styles.btn}>
                                <Text style={styles.submit}>
                                  Go to Home
                                </Text>

                                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    submit:{
        fontWeight:'bold',
        fontSize:20,
        color:'white'
    },
    btn:{  
        height:55,
        width:'86%',
        borderRadius:10,
        marginTop:30,
        marginLeft:'7%',
        backgroundColor:'#75C31E',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:10
      },
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
    container2:{
       height:'70%',
       width:'86%',
       marginLeft:'7%',
       backgroundColor:'white',
       borderRadius:10,
       marginTop:-50,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 5 },
       shadowOpacity: 1.0,
       elevation: 10,
       position: 'relative'
    },

})

export default Service
