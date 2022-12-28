import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { utils } from '../libs/themes/theme';
import { FORM_FIELDS } from '../navigation/routerNames';

const WelcomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={utils.rootScreen}>
            <Text>Welcome to React Native UI</Text>
            <Button onPress={() => { navigation.navigate(FORM_FIELDS) }} title="Go to Form Fields" />
        </View>
    );
}

export default WelcomeScreen;
