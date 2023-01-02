import { createStackNavigator } from "@react-navigation/stack";
import { FormFieldsScreen, WelcomeScreen } from "../screens";
import { FORM_FIELDS, WELCOME } from "./routerNames";

const Stack = createStackNavigator();

const RnUIStackRouters = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={FORM_FIELDS} component={FormFieldsScreen} />
        </Stack.Navigator>
    )
}
export default RnUIStackRouters;