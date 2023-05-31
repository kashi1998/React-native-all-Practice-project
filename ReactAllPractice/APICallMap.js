import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

const App = () => {

    const [data, setData] = useState([]);

    const getAPIData = async () => {

        const url = "https://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url);
        result = await result.json();
        setData(result);


    }

    useEffect(() => {
        getAPIData()
    },
        [])

    // Using Map Array

    // return (
    //     <ScrollView>
    //         <Text style={{ fontSize: 30 }}>Hey There </Text>
    //         {
    //             data.length ?
    //                 data.map((item) =>
    //                  <View>
    //                     <Text style={{ fontSize: 15, backgroundColor: 'grey' }}>{item.id}</Text>
    //                     <Text style={{ fontSize: 16, backgroundColor: 'orange' }}>{item.userId}</Text>
    //                     <Text style={{ fontSize: 30, backgroundColor: 'skyblue' }}>{item.title}</Text>
    //                     <Text style={{ fontSize: 30 }}>{item.body}</Text>
    //                 </View>)
    //                 : null
    //         }
    //     </ScrollView>
    // )


    // Using FlatList 
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Hey There </Text>
            {
                data.length ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <View>
                            <Text style={{ fontSize: 20, backgroundColor: 'grey', borderColor: 'black', borderWidth: 2, paddingLeft: 10, }}>{item.id}</Text>
                            <Text style={{ fontSize: 14, backgroundColor: 'skyblue', borderColor: 'black', borderWidth: 2, paddingLeft: 10, }}>{item.title}</Text>
                            <Text style={{ fontSize: 15, borderColor: 'black', borderWidth: 2, paddingLeft: 10, marginBottom: 10 }}>{item.body}</Text>
                        </View>}
                    />
                    : null
            }
        </View>
    )
}
export default App;