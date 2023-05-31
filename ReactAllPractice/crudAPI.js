import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Modal, TextInput } from 'react-native'
import SearchAPI from './SearchAPI'

const App = () => {
    const [data, setData] = useState([])
    const [showModal, setShowModal]=useState(false)
    const [selectedUser,setSelectedUser]= useState(undefined)

    const getAPIData = async () => {
        const url = 'http://192.168.0.111:3000/users'
        let result = await fetch(url)
        result = await result.json()
        //console.warn(result);
        setData(result)
    }

    const deleteData = async (id) => {
        const url = "http://192.168.0.111:3000/users"
        let result = await fetch(`${url}/${id}`, {
            method: "delete"
        });
        result = await result.json();
        //console.warn(`${url}/${id}`);
        if (result) {
            console.warn("User Deleted")
            getAPIData();
        }

    }

    const updateData=(data)=>{
        setShowModal(true)
        setSelectedUser(data)
    }

    


    useEffect(() => {
        getAPIData()
    }, [])

    return (
        <View style={styles.main}>
            <Text>Hello</Text>
            {
                data.length ?
                    data.map((item) =>
                        <View style={styles.countainer}>
                            <View style={{ flex: 1, paddingLeft: 10, }}>
                                <Text>{item.name}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{item.age}</Text>
                            </View>
                            <View style={{ marginRight: 10 }}>
                                <Button title='Delete' onPress={() => deleteData(item.id)} />
                            </View>
                            <View style={{ marginRight: 10 }}>
                                <Button title='Update' onPress={()=> updateData(item)}/>
                            </View>
                        </View>

                    ) : null
            }
            <Modal visible={showModal} transparent={true}>
                <UpdateModal setShowModal = {setShowModal} selectedUser={selectedUser} getAPIData={getAPIData} />
            </Modal>
        </View>
    )
}

const UpdateModal = (props)=> {
    //console.warn(props.selectedUser);
    const [name, setName] = useState(undefined)
    const [age, setAge] = useState(undefined)
    const [email, setEmail] = useState(undefined)

    useEffect(()=>{
        if(props.selectedUser){
            setName(props.selectedUser.name);
            setAge(props.selectedUser.age.toString())
            setEmail(props.selectedUser.email);
        }

    }, [props.selectedUser])

    userData =async()=>{
        const url="http://192.168.0.111:3000/users"
        let result=await fetch(`${url}/${props.selectedUser.id}`,{ 
            method: "Put",
            headers: {"content-type" : "application/json"},
            body:JSON.stringify({name, age, email})
        })
        result=await result.json();
        if(result){
            props.getAPIData();
            props.setShowModal(false);
        }
        console.warn(result)
    }

    return(
    <View style={styles.centeredView} >
                    <View style={styles.modalView}>
                        <TextInput style={styles.inputBox} value={name} onChangeText={(text)=>setName(text)} />
                        <TextInput style={styles.inputBox} value={age} onChangeText={(text)=>setAge(text)} />
                        <TextInput style={styles.inputBox} value={email} onChangeText={(text)=>setEmail(text)} />
                        <View style={{marginBottom:10, width: 300}}><Button title='Save' onPress={userData} /></View>
                        <View style={{marginBottom:10, width: 300}}><Button title='Close' onPress={()=> props.setShowModal(false)} /></View>
                        <View style={{marginBottom:10, width: 300}}><Button title='Search' onPress={()=> {<SearchAPI />}} /></View>
                    </View>
                </View>
                )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    countainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
        backgroundColor: "orange",
        marginBottom: 5,

    },
    centeredView:{
        flex :1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    modalView: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems:"center",
        shadowColor: 'black',
        shadowOpacity:0.30,
        elevation: 5
    },
    inputBox: {
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        width: 300,
        marginBottom: 10,

    }
})
export default App;