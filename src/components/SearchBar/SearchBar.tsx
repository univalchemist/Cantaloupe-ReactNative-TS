import React from "react";
import { Search } from '@assets/icon';
import { StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@theme/color";

const CustomSearchBar = () => {
    return (
        <View style={[styles.searchBox]} >
            <TextInput
                style={styles.input}
                placeholder="Search Address"
                placeholderTextColor={COLORS.gray3}
                keyboardType="default"
            />
            <TouchableOpacity>
                <View style={styles.searchIconBox}>
                    <Search/>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontFamily: 'Rubik',
        height: '100%',
        borderColor: COLORS.transparent,
        color: COLORS.black,
        paddingLeft: 16,
        fontSize: 20,
    },
    searchBox: {
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent :'space-between',
        elevation: 4,
        backgroundColor: COLORS.white,
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
        color: COLORS.gray3,
      },
});

export default CustomSearchBar;

