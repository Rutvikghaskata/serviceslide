import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image} from 'react-native'


const Service = () => {
    return (
          <View style={styles.container}>
          <View style={styles.container1}>
          <TouchableOpacity>
          <Text style={styles.text}>Back</Text>        
          </TouchableOpacity>
          <View style={{ flex:1,justifyContent: 'center',alignItems: 'center',marginTop:-70}}>
          <Text style={styles.text1}>Services</Text>
          </View>
         
          </View>  
          <View style={{ flexDirection:'row' ,flex:1,justifyContent: 'center',alignItems: 'center', marginTop:-20}}>
          <TouchableOpacity><Image style={{ height:250,width:180 , marginRight:10,borderRadius:30 }} source={require('../images/charging.png')}/></TouchableOpacity>
          <TouchableOpacity><Image style={{ height:230,width:180 , borderRadius:10 }} source={require('../images/garage.png')}/></TouchableOpacity>
          </View>
          <View style={{ flexDirection:'row' ,flex:1,justifyContent: 'center',alignItems: 'center', marginTop:-110}}>
          <TouchableOpacity><Image style={{ height:230,width:180 , marginRight:10,borderRadius:10 }} source={require('../images/petrol.png')}/></TouchableOpacity>
          <TouchableOpacity><Image style={{ height:230,width:180 , borderRadius:10 }} source={require('../images/shop.png')}/></TouchableOpacity>
          </View>
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
