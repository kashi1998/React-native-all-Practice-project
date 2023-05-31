import React, { useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'

const App = () => {
    const diplayLoaderStart = () => {
        setShow(true)
        setTimeout(() => {
             setShow(false)
            
         }, 5000);
    }
    const diplayLoaderStop = () => {
        setShow(false)
        // setTimeout(() => {
        //     setShow(false)
            
        // }, 5000);
    }
    
    const [show, setShow]= useState(false);
    return(
        <View style={styles.main}>
           <ActivityIndicator size={200} color={'large'} animating={show} />
           <ActivityIndicator size={150} color={'medium'} animating={show} />
           <ActivityIndicator size={100} color={'small'} animating={show} />
           <Button  title={'Start Loading'} onPress={diplayLoaderStart}/>
           <Button title={'Stop Loading'} onPress={diplayLoaderStop}/>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    main : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,
    },
})