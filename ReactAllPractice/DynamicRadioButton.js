import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const skill=[
    {
        id : 1,
        name: 'JAVA',
        data: 'coder',
    },
    {
        id : 2,
        name: 'PHP',
        data: 'coder',
    },
    {
        id : 3,
        name:  'Phyton',
        data: 'coder',
    },
    {
        id : 4,
        name: 'React',
        data: 'coder',
    },
    {
        id : 5,
        name: 'C++',
        data: 'coder',
    },
]

const DynamicRadioButton = () => {
    const [selectedRadio, setSelectedRadio]=useState() 
    return (
        <View style={styles.main}>
          {
            skill.map((item, index) =>  <TouchableOpacity key={index} onPress={()=> setSelectedRadio(item.id)}>
            <View style={styles.wrapper}>
                <View style={styles.radio}>
                    {selectedRadio===item.id? <View style={styles.radioBg}></View>:null}
                </View>
                <Text style={{}}>{item.name}</Text>
                <Text style={{margin: 10}}>{item.data}</Text>
            </View>
        </TouchableOpacity>)
          }
        </View>

    )
}

export default DynamicRadioButton;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    radio: {

        width: 30,
        height: 30,
        borderRadius: 20,   
        borderWidth: 2,
        margin: 10,
    },

    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'

    },  
    radioBg: {
        height: 20,
        width: 20,
        backgroundColor: 'grey',
        borderRadius: 20,
        margin : 3,        
    },

})
