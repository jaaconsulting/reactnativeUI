import { StyleSheet , Dimensions} from "react-native"


const {height} = Dimensions.get('screen');

export const so = {
    rootScreen:{
        flex: 1,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export const utils = StyleSheet.create(so);