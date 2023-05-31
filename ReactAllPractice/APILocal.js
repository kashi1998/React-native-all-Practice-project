import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const App = () => {
    const [data, setData] = useState([])

    const getAPI = async () => {
        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(url)
        result = await result.json();
        setData(result);
        
    }

    useEffect(() => {
        getAPI();
    })




    return (
        <View>
            <Text style={{ fontSize: 30 }}>API Call From DB</Text>
            {
                data.length ?
                    data.map((item) =>
                        <View>
                            <Text style={{fontSize: 20}}>ID : {item.id} </Text>
                            <Text style={{fontSize: 20}}>Name : {item.name} </Text>
                            <Text style={{fontSize: 20}}>Email : {item.email} </Text>
                        </View>)
                    : null
            }
        </View>
    )
}
export default App;