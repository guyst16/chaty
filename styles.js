import { StyleSheet } from "react-native";
import COLORS from "./Colors";

const styles = StyleSheet.create({
    SendMessegeButton: {
        backgroundColor: COLORS.LightPrimary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    ButtomBar: {
        flexDirection: 'row',
        flex: 1
    }
});

export default styles;