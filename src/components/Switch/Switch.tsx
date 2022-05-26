import React from 'react';
import { View, StyleSheet, Text, Image, ViewStyle, Alert } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { COLORS } from '@theme/color';
import { moderateScale } from 'react-native-size-matters';
import ToggleSwitch from 'toggle-switch-react-native'
import { Filter } from '@/assets/icon';

interface SwitchProps {
    toggleSwitch: any
    isEnabled: boolean
}

export const SwitchComp = ({ toggleSwitch, isEnabled }: SwitchProps) => {
    return (
        <ToggleSwitch
            isOn={isEnabled ? true : false}
            onColor={COLORS.lightBlue}
            offColor={COLORS.lightBlue}
            size="small"
            onToggle={toggleSwitch}
            thumbOffStyle={[styles.tumb, { position: "absolute", left: moderateScale(-5) }]}
            thumbOnStyle={styles.tumb}
            trackOffStyle={styles.tumb}
            trackOnStyle={styles.tumb}
        />
    );
};

const styles = StyleSheet.create({

    switchStyle: {
        width: "20%",
    },
    tumb: {
        minWidth: moderateScale(24),
        minHeight: moderateScale(24),
        borderRadius: moderateScale(24) / 2,
    },
    toggleContainer: {
        backgroundColor: "red"
    }
});
