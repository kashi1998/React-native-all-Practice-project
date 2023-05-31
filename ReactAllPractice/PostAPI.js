import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

const App = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState()
    const [email, setEmail] = useState('')
    const [errorName, setErrorName] = useState(false)
    const [errorAge, setErrorAge] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    //Static Post data
    // const data = {
    //     name : "Virat",
    //     age: 39,
    //     email : "virat@gmail.com"
    // }


    const postAPI = async () => {

        if (!name) {
            return (setErrorName(true))
        }else{
            setErrorName(false)
        }

        if(!age){
            return(setErrorAge(true))
        }else{
            setErrorAge(false)
        }


        if(!email){
            return(setErrorEmail(true))
        }else{
            setErrorEmail(false)        }

        if (!name || !age || !email) {
            return false
        }
        console.warn("test")


        console.warn(name + age + email)
        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, age, email })

        })
    }



    return (
        <View>
            <Text>POST API Data</Text>
            <TextInput
                style={styles.inputBox}
                placeholder='Enter Name'
                onChangeText={(text) => { setName(text) }}
                value={name} />
                {
                    errorName ? <Text style={styles.errorField}>Please Enter Name</Text>:null
                }
            
            <TextInput
                style={styles.inputBox}
                placeholder='Enter Age'
                onChangeText={(text) => { setAge(text) }}
                value={age} />
                 {
                    errorAge ? <Text style={styles.errorField}>Please Enter Age</Text>:null
                }
            <TextInput
                style={styles.inputBox}
                placeholder='Enter Email'
                onChangeText={(text) => { setEmail(text) }}
                value={email} />
                 {
                    errorEmail ? <Text style={styles.errorField}>Please Enter Email</Text>:null
                }

            <Button onPress={postAPI} title='Save Data' />
        </View>

    )
}

const styles = StyleSheet.create({
    inputBox: {
        borderColor: 'skyblue',
        margin: 10,
        borderWidth: 2,
        marginBottom: 0
        
    },
    errorField:{
        color: 'red',
        marginLeft:10
    }
})
export default App;