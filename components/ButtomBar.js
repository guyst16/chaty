import React from "react"; 
import { Text, View } from "react-native";
import styles from "../styles.js";
import SendMessegeButton from "./SendMessegeButton.js";

const ButtomBar = () => {
    return(
        <View style={styles.ButtomBar}>
            <SendMessegeButton/>
            <Text style={{ flex: 4 }}>Text</Text>
        </View>   
    )
};

export default ButtomBar;