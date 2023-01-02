import { useNavigation } from '@react-navigation/native';
import '../localization/index';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useTranslation } from "react-i18next";
import { utils } from '../libs/themes/theme';
import { FORM_FIELDS } from '../navigation/routerNames';

const WelcomeScreen = () => {

    const navigation = useNavigation();
    const {t, i18n} = useTranslation();

    return (
        <View style={utils.rootScreen}>
            <Text>{t('welcome')}</Text>
            <Button onPress={() => { navigation.navigate(FORM_FIELDS) }} title="Go to Form Fields" />
        </View>
    );
}

export default WelcomeScreen;
