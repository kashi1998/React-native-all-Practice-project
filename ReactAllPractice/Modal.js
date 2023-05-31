import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

const App = () => {
    const [showModal, setShowModal]= useState(false) 
    return (
        <View style={styles.main}>
            <Modal transparent={true}
            visible={showModal} >
                <View style={styles.modalCountainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hey Brother</Text>
                        <View><Button title='Closed Modal' onPress={()=>setShowModal(false)}/></View>
                    </View>
                </View>
            </Modal>
            <View style={styles.openModal}><Button title='Open Modal'  onPress={()=>setShowModal(true)}/></View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalCountainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    openModal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center'


    },
    modalView:{
        alignItems:'center',
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 5,
        

    },
    modalText:{
        fontSize: 20,
        marginBottom: 10,

    },
})
export default App;