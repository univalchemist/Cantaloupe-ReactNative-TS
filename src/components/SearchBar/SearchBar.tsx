import React from "react";
import { Search } from '@assets/icon';

import { Button, StyleSheet, TextInput, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";


const CustomSearchBar = () => {
    return (
        <View style={styles.searchBox} >
            <TextInput
                style={styles.input}
                placeholder="Search Address"
                placeholderTextColor='#64656A'
                keyboardType="default"
            />

            <TouchableOpacity>
                <View style={styles.searchIconBox}>
                    <Search color='#64656A' fill={'#64656A'}/>
                </View>

            </TouchableOpacity>

        </View>

    );
};

const styles = StyleSheet.create({

    input: {

        fontFamily: 'Rubik',
        height: '100%',
        borderColor: "transparent",
        color: 'black',
        paddingLeft: 16,
        fontSize: 20,

    },


    searchBox: {
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent :'space-between',
        elevation: 4,
        backgroundColor: 'white',
        width: '100%',
        height: 45,
        marginVertical:moderateScale(15)

    },


    searchIconBox: {
        
        height: '100%',
        paddingRight:16,
        justifyContent: 'center',
        alignItems: 'center'

    },


    searchIcon: {
        color: '#64656A',
      },



});

export default CustomSearchBar;

