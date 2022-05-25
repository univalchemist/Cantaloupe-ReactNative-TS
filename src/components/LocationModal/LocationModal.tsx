import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback } from "react-native";

const LocationModal = ({onBlock,OnAllow}:{onBlock:()=>void,OnAllow:()=>void}) => {
   
    return (
           <Modal
            presentationStyle="overFullScreen"
            animationType="none"
                transparent={true}
                visible={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>more.cantaloupe.com wants to use your device’s location</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableWithoutFeedback onPress={onBlock} >
                                <Text style={styles.buttonText}>Block</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={OnAllow}  >
                                <Text style={styles.buttonText}>Allow</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        position:"absolute",
        justifyContent: "center",
        width: "95%",
        alignSelf: "center",
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        height:"100%"
    },
    buttonContainer: {
        alignSelf: 'flex-end',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: 10,
        width: "35%"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        marginBottom: 16,
        fontSize: 16,
        color: 'black',
        textAlign: "left"
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#5576D1',
        textAlign: "left"
    }
});

export default LocationModal
