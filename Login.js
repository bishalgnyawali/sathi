import React, { Component } from 'react';
import { 
   View, 
   Platform,
   Text, 
   Image,
   //Button, 
   TextInput, 
   KeyboardAvoidingView,
   StyleSheet,
   TouchableOpacity
   } from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';//import { ScrollView } from 'react-native-gesture-handler';

class Login extends Component {
   
static navigationOptions = {
      title: 'User Login',//gives title name user login if header is not null
      header: null,//removes header bar
};

   _scrollToInput (reactNode: any) {
      // Add a 'scroll' ref to your ScrollView
      this.scroll.props.scrollToFocusedInput(reactNode)
   }
   render() {
      return (
         <KeyboardAvoidingView
         behavior= {(Platform.OS === 'ios')? "padding" : null}//behavior="padding" 
         style={styles.container}
         //keyboardVerticalOffset={Constants.statusBarHeight}
         enabled
         >
            <View style={{flex:1}}>        
               <View style = {styles.logoContainer}>
                  <Image source={require('./assets/fun-people-healthy-life-logo-260nw-560428081.jpg')} style={{height:150, width:150, paddingTop:15, resizeMode:'stretch',backgroundColor:'#004c8c'}}></Image>
               </View>

               <View style = {styles.inputContainer}>
                  <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Employee ID"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  autoCorrect={false}
                  //onChangeText = {this.handleEmail}
                  />

               <TextInput style = {styles.input}
                  //onKeyboardWillShow=()=>{this.scroll.props.scrollToPosition(0,0)}
                  //secureTextEntry=1
                  underlineColorAndroid = "transparent"
                  placeholder = "Password"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  autoCorrect={false}
                  //onChangeText = {this.handlePassword}
               />
               
               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {() => 
                              {
                                 //createAppContainer(AppNavigator);
                                 this.props.navigation.navigate('userProfile')
                              }
                           }>
                  <Text style={{padding:5,textAlign:'center', bottom:15, color:'white',borderColor: 'black'}}>Log In</Text>
               </TouchableOpacity>
                  
            </View>
         
            <View style={{flex:1}}>

            </View>    
         </View>
      </KeyboardAvoidingView>

      );
   }
}

// 
export default Login;


const styles = StyleSheet.create({
   container: {
      paddingTop: 2,
      flex:1,
      //alignItems:'center',
      backgroundColor:'#004c8c',
      margin:0,
      borderRadius:20,
   },
   logoContainer:{
      backgroundColor:'#004c8c',
      flex:2,
      justifyContent:'center',
      alignItems: 'center',
     color:'white',
     marginTop:10,
     alignSelf:'center',
     backgroundColor:'#354766',
     borderRadius:25,
   },

   inputContainer:{
      flex:2,
      margin:20,
      paddingTop:20,
      justifyContent:'center',
      paddingTop:16,
      backgroundColor:'white',
      //position:'absolute',
      paddingRight: 16,
      paddingBottom: 8,
      paddingLeft: 16,
      borderRadius: 25,
      
      },
   input: {
      paddingLeft:18,
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      borderRadius:25
   },
   submitButton: {
      backgroundColor: 'black',
      paddingTop:12,//padding: 16,
      borderRadius:25,
      height: 40,
      width:160,
      marginBottom: 30,
      marginTop: 0,
      marginLeft:75,
      borderWidth:8,
      
      
   },
   submitButtonText:{
      color: 'black',
      alignSelf:'center',
      alignItems:'center',
      borderRadius: 25,
      width:260,
      height:60,
      //backgroundColor:'white',
      borderWidth:8,
      //text:'bold',
      //aspectRatio:'2'
   }
});