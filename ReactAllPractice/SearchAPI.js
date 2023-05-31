import React, { useEffect, useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

const App = () => {
    const [data, setData] = useState(undefined);
    const searchUser = async (text) => {
        const url = `http://192.168.0.111:3000/users?q=${text}`
        let result = await (await fetch(url)).json();
        console.warn(result)
        if (result) {
            setData(result)
        }
    }


    return (
        <View>
            <View><TextInput
                onChangeText={(text) => searchUser(text)}
                placeholder='Search'
                style={{ borderColor: 'skyblue', borderWidth: 2, margin: 10, marginBottom: 0 }} /></View>
            {/* <View style={{ margin: 10 }}><Button title='Search Api Details' /></View> */}
            {
                data ?
                    data.map((item) => <View style={styles.dataBox}>
                        <View style={{flex: 1, alignItems: 'flex-start'}}><Text>{item.name}</Text></View>
                        <View style={{flex: 1, alignItems: 'flex-start'}}><Text >{item.age}</Text></View>
                        <View style={{flex: 1, alignItems: 'flex-start'}}><Text>{item.email}</Text></View>
                    </View>) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    dataBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin : 10,


    },
})
export default App;