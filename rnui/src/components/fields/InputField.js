import React, { useState } from 'react';
import { Text, TextInput, View ,StyleSheet}   from 'react-native';

const intialState = 'No Name';
const InputField = () => {
    const [user, setUser] = useState(intialState);

    return (
        <View>
            <Text>User: {user}</Text>
            <TextInput value={user} 
                onChangeText= {(userName) => setUser(userName)}
                style={styles.inputStyle}/>
        </View>
    );
}
export default InputField;

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth:1,
        padding:4,
        marginTop: 4
    }
})
