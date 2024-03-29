import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { COLORS } from "@theme/color";
import { TouchableOpacity } from "react-native-gesture-handler";

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
                            <TouchableOpacity style={styles.blockButton} onPress={onBlock} >
                                <Text style={styles.buttonText}>Block</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.allowButton} onPress={OnAllow}  >
                                <Text style={styles.buttonText}>Allow</Text>
                            </TouchableOpacity>
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
        width: "100%",
        alignSelf: "center",
        backgroundColor:COLORS.blackWithOpacity,
        height:"100%"
    },
    blockButton:{
        minWidth:"30%"
    },
    buttonContainer: {
        alignSelf: 'flex-end',
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 10,
        width: "80%",
    },
    allowButton:{},
    modalView: {
        margin: 20,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: "center",
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:"80%",
        alignSelf:"center"
    },
    modalText: {
        fontWeight: 'normal',
        marginBottom: 16,
        fontSize: 16,
        color: COLORS.black,
        textAlign: "left",
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.blue,
        textAlign: "left"
    }
});

export default LocationModal
