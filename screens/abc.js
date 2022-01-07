import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image, SafeAreaView, ActivityIndicator, FlatList, TextInput, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class profile extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isLoading:true,
           dataSource: null,
        }
    }
    componentDidMount(){
        return fetch('https://evspoint.herokuapp.com/station')
           .then((response) => response.json())
           .then((responseJson)=>{
       
                this.setState({
                 isLoading: false,
                 dataSource: responseJson
             });  
           })
 
           .catch((error) => {
               console.log(error)
           });
         }
       render() {
        if (this.state.isLoading){

            return (
    
                <View style={styles.container}>
                    <StatusBar hidden />
                    <ActivityIndicator/>
                    </View>
                     ) 
            }else {
                let user = this.state.dataSource.map((val,key)=>{
                      return <View key ={key} style={{marginLeft:30}}>
                         
                               <Text color='black' style={{marginTop:50}}>Station Name:</Text>
                               <TextInput defaultValue={val.chargingStation} style={{ 
                                //    borderBottomWidth:2,
                                //    borderColor:'grey',
                                   marginTop:-5,
                                   width:250,
                                   borderRadius:0,
                                   marginBottom:-10,
                                   marginLeft:10                               
                               }}/>
                                <View style={{  height:1, width:300 , backgroundColor:'grey'}}></View>
                                  <Text color='black' style={{marginTop:10}}>Owner Name:</Text>           
                                <TextInput defaultValue={val.ownerName} style={{ 
                                //    borderBottomWidth:2,
                                //    borderColor:'grey',
                                   marginTop:-5,
                                   width:250,
                                   borderRadius:0,
                                   marginBottom:-10,  
                                   marginLeft:10
                               }}/>
                                <View style={{  height:1, width:300 , backgroundColor:'grey'}}></View>
                                <TouchableOpacity style={styles.btn}>
                                <Text style={styles.submit}>
                                  Edit Profile
                                </Text>

                                </TouchableOpacity>
                          {/* 
                          <Text style={styles.text1}>{val.city}</Text>
                          <Text style={styles.text1}>{val.state}</Text>
                          <Text style={styles.text1}>{val.pincode}</Text>
                          <Text style={styles.text}>{val.plugs}</Text> */}
                          {/* <Text style={styles.text1}>{val.address}</Text>
                          <Text>{val.openingTime+' to '+val.closeTime}</Text> */}
                            
                                      
                          </View>;                       
                 })                         
       return (
        <View style={{  height: '100%',backgroundColor: 'white'}} >
            <StatusBar hidden/>
        <View style={styles.container1}>
            <TouchableOpacity>
          <Text style={styles.text}>Back</Text>
        
          </TouchableOpacity>
          
          <Text style={styles.text1} color='white'>Your Profile</Text>
       
        </View>
        
        <View style={styles.container2}>
        <Image style={styles.image} source={require('../images/admin1.png')}/>
          </View>
           <View style={styles.container}>
              
           </View>
           <ScrollView>{user}</ScrollView>
           
   </View>
       )     
}
} 
}

const styles = StyleSheet.create({
    submit:{
        fontWeight:'bold',
        fontSize:15,
        color:'white',
      },
    btn:{ 
    
        height:55,
        borderRadius:10,
        marginTop:50,
        marginLeft:50,
        marginRight:100,
        backgroundColor:'#75C31E',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      },
    image:{
    marginTop:17,
    marginLeft:19,    
    height:80,
    width:80,
    },
 text:{
    fontFamily:'bold',
    marginTop:420,
    marginLeft:120,
    fontSize:20,
    color: 'white'
   },
   text1:{
    fontFamily:'bold',
    marginTop:20,
    marginLeft:220,
    fontSize:30,
    color: 'white'
   },
 container1: {
     height:600,
     width:600,
     marginTop:-400,
     marginLeft:-100,
     borderWidth:0,
     borderRadius:600,
     backgroundColor:'#75C31E'
 },
 container2: {
     height:120,
     width:120,
     borderWidth:0,
     borderRadius:120,
     backgroundColor:'white',
     marginTop:-56,
     marginLeft:130,
     shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1.0,
    elevation: 10,
    position: 'relative'
 }
})

export default profile;