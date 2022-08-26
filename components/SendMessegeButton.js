import React from "react"; 
import { 
    TouchableOpacity,
    Text } from "react-native";
import styles from "../styles.js";

const SendMessegeButton = () => {
    return(
        <TouchableOpacity style={styles.SendMessegeButton}>
            <Text>
                Button
            </Text>
        </TouchableOpacity>
    ) 
};

export default SendMessegeButton;