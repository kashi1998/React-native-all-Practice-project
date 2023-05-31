import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Screen } from 'react-native-screens';
const Stack=createNativeStackNavigator();
const btnPress = () => {
    return(
        console.warn("Button Pressed")
    )
}
const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                 headerStyle : {
                    backgroundColor: 'skyblue'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 25,
                    color: 'black'
                }
            }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={Home} 
                options={{
                   // headerLeft : () => <Button title='Left' onPress={btnPress}/>,
                    headerRight: () => <Header />,
                    headerStyle : {
                        backgroundColor: 'orange',
                        padding: 5,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 25,
                        color: 'black'
                    }
                }}/>
                

            </Stack.Navigator>
        </NavigationContainer>
    )
} 
//screens Home

const Home = (props) =>{
    console.warn(props.route.params)
    const {text,age}=props.route.params
    return(
        
        <View style={styles.main}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Home Page</Text>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Name :{text} </Text>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Age :{age} </Text>
       {/* <Button title='Login' onPress={()=> props.navigation.navigate('Login')} /> */}
        </View>
    )
}
//screens Login

const Login = (props) =>{
    const name ='Anil'
    const age = 24
    const [text, setText]= useState("")
    return(
        <View>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Login Page</Text>
        <TextInput onChangeText={(text)=>{setText(text)}} placeholder='Enter Name'/>
        <Button title='Login Page' onPress={()=> props.navigation.navigate('Home', {text,age})} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
    }
})
const Header =()=>{
    return(
        <TextInput placeholder='Name' />
    )
}
export default App;